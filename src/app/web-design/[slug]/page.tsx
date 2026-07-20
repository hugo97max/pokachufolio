import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import webDesignAssets from "@/app/resources/webDesignAssets.json";
import { webDesignProjects } from "@/app/resources/webDesignProjects";
import styles from "./webDesignProject.module.scss";

interface WebDesignProjectParams {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return webDesignProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: WebDesignProjectParams) {
  const project = webDesignProjects.find((item) => item.slug === params.slug);

  if (!project) {
    return;
  }

  const title = `${project.title} - Diseño Web`;
  const description = `Reconstrucción archivada del sitio ${project.domain} dentro del portafolio web de ${person.name}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${baseURL}/web-design/${project.slug}`,
      images: [
        {
          url: `https://${baseURL}/og?title=${encodeURIComponent(project.title)}`,
          alt: title,
        },
      ],
    },
  };
}

export default function WebDesignProject({ params }: WebDesignProjectParams) {
  const project = webDesignProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const images = webDesignAssets[project.slug]?.images ?? [];
  const logo = null;
  const heroImage = images[0];
  const gallery = images.filter((image) => image !== logo && image !== heroImage).slice(0, 4);

  return (
    <Column
      as="section"
      maxWidth="l"
      gap="xl"
      paddingX="l"
      paddingTop="64"
      paddingBottom="64"
      style={{ "--accent": project.accent } as CSSProperties}
    >
      <Column maxWidth="m" gap="16">
        <Button href="/web-design" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Diseños Web
        </Button>
        <Text variant="label-default-s" onBackground="brand-weak">
          Proyecto de portafolio / reconstrucción estática
        </Text>
        <Heading variant="display-strong-s">{project.title}</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          {project.description}
        </Text>
      </Column>

      <div className={styles.projectHeader}>
        <Column gap="4">
          <Text variant="label-default-s" onBackground="neutral-weak">
            Estado del sitio original
          </Text>
          <Text variant="body-strong-m">{project.status}</Text>
        </Column>
        <Column gap="4">
          <Text variant="label-default-s" onBackground="neutral-weak">
            Dominio
          </Text>
          <Text variant="body-strong-m">{project.domain}</Text>
        </Column>
        {project.url ? (
          <Button href={project.url} target="_blank" rel="noopener noreferrer" variant="secondary" size="s">
            Visitar original
          </Button>
        ) : (
          <span className={styles.archivePill}>Reconstrucción en archivo</span>
        )}
      </div>

      <div className={styles.showcase} data-variant={project.variant}>
        <div className={styles.browserBar}>
          <span />
          <span />
          <span />
          <p>{project.domain}</p>
        </div>

        <div className={styles.siteReplica}>
          <header className={styles.siteHeader}>
            <div className={styles.brand}>
              {logo ? <img src={logo} alt="" /> : <strong>{project.title}</strong>}
            </div>
            <nav aria-label={`Navegación reconstruida de ${project.title}`}>
              {(project.nav ?? []).slice(0, 4).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </nav>
          </header>

          <section className={styles.siteHero}>
            <Column gap="16" className={styles.heroCopy}>
              <Text variant="label-default-s" onBackground="brand-weak">
                {project.sector}
              </Text>
              <Heading as="h2" variant="display-strong-m">
                {project.heroTitle}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {project.finding}
              </Text>
              <Flex gap="8" wrap>
                <span className={styles.primaryAction}>{project.cta}</span>
                <span className={styles.secondaryAction}>Contacto</span>
              </Flex>
            </Column>
            <div className={styles.heroMedia}>
              {heroImage ? <img src={heroImage} alt="" /> : <span className={styles.mediaFallback}>{project.title}</span>}
            </div>
          </section>

          <section className={styles.contentStrip}>
            <article>
              <span />
              <strong>{project.highlight}</strong>
              <p>{project.description}</p>
            </article>
            <article>
              <span />
              <strong>Dirección visual</strong>
              <p>Reconstrucción preparada con estructura responsive, assets optimizados y bloques estáticos editables.</p>
            </article>
          </section>

          {gallery.length > 0 && (
            <section className={styles.gallery} aria-label={`Assets recuperados de ${project.title}`}>
              {gallery.map((image) => (
                <img key={image} src={image} alt="" loading="lazy" />
              ))}
            </section>
          )}
        </div>
      </div>

      <div className={styles.notesGrid}>
        <Column gap="12" padding="24" className={styles.note}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Recuperación
          </Text>
          <Text variant="body-default-m">
            {webDesignAssets[project.slug]?.fetched
              ? "Assets principales descargados y optimizados dentro del repositorio."
              : "Sin assets públicos descargables todavía; queda como base editorial hasta recuperar capturas o archivos."}
          </Text>
        </Column>
        <Column gap="12" padding="24" className={styles.note}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Siguiente ajuste
          </Text>
          <Text variant="body-default-m">{project.nextAction}</Text>
        </Column>
      </div>
    </Column>
  );
}
