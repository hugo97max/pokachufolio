import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
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
  const description = `Reconstruccion archivada del sitio ${project.domain} dentro del portafolio web de ${person.name}.`;

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
          Proyecto de portafolio / reconstrucción archivada
        </Text>
        <Heading variant="display-strong-s">{project.title}</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          {project.highlight}
        </Text>
      </Column>

      <div className={styles.showcase}>
        <div className={styles.browserBar}>
          <span />
          <span />
          <span />
          <p>{project.domain}</p>
        </div>

        <div className={styles.demo}>
          <header className={styles.demoHeader}>
            <strong>{project.title}</strong>
            <nav aria-label={`Navegacion demo de ${project.title}`}>
              {project.sections.slice(0, 4).map((section) => (
                <span key={section}>{section}</span>
              ))}
            </nav>
          </header>

          <section className={styles.demoHero}>
            <Column gap="12" className={styles.demoCopy}>
              <Text variant="label-default-s" onBackground="brand-weak">
                {project.sector}
              </Text>
              <Heading as="h2" variant="display-strong-m">
                {project.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {project.finding}
              </Text>
              <Flex gap="8" wrap>
                <span className={styles.demoButton}>Home</span>
                <span className={styles.demoButtonSecondary}>Contacto</span>
              </Flex>
            </Column>
            <div className={styles.visualBlock}>
              <span />
              <span />
              <span />
            </div>
          </section>

          <section className={styles.demoSections} aria-label="Secciones de la reconstruccion">
            {project.sections.map((section) => (
              <article key={section}>
                <span />
                <strong>{section}</strong>
                <p>Modulo base preparado para reemplazar con textos, capturas y assets recuperados.</p>
              </article>
            ))}
          </section>
        </div>
      </div>

      <div className={styles.metaGrid}>
        <Column gap="8" className={styles.metaCard}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Estado inicial
          </Text>
          <Text variant="body-strong-m">{project.status}</Text>
        </Column>
        <Column gap="8" className={styles.metaCard}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Recuperabilidad
          </Text>
          <Text variant="body-strong-m">{project.recoverability}</Text>
        </Column>
        <Column gap="8" className={styles.metaCard}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Criterio de fidelidad
          </Text>
          <Text variant="body-strong-m">{project.level}</Text>
        </Column>
      </div>

      <div className={styles.notesGrid}>
        <Column gap="12" padding="24" className={styles.note}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Hallazgo
          </Text>
          <Text variant="body-default-m">{project.finding}</Text>
        </Column>
        <Column gap="12" padding="24" className={styles.note}>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Siguiente accion
          </Text>
          <Text variant="body-default-m">{project.nextAction}</Text>
        </Column>
      </div>
    </Column>
  );
}
