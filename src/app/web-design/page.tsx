import type { CSSProperties } from "react";
import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, webDesign } from "@/app/resources/content";
import { webDesignProjects } from "@/app/resources/webDesignProjects";
import styles from "./webDesign.module.scss";

export async function generateMetadata() {
  const title = webDesign.title;
  const description = webDesign.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/web-design`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
  };
}

export default function WebDesign() {
  const featuredProjects = webDesignProjects.filter((project) => project.priority === "Prioridad 1");
  const archivedProjects = webDesignProjects.filter((project) => project.priority !== "Prioridad 1");

  return (
    <Column maxWidth="l" fillWidth gap="xl" paddingX="l">
      <Column className={styles.hero} fillWidth gap="m" paddingTop="64" paddingBottom="24">
        <Text variant="label-default-s" onBackground="brand-weak">
          {person.name}
        </Text>
        <Heading variant="display-strong-l">{webDesign.title}</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Homepages, interfaces y experiencias web reconstruidas como piezas independientes dentro del portafolio.
        </Text>
      </Column>

      <section className={styles.grid} aria-label="Diseños web prioritarios">
        {featuredProjects.map((project) => (
          <a
            key={project.slug}
            href={`/web-design/${project.slug}`}
            className={styles.card}
            style={{ "--accent": project.accent } as CSSProperties}
          >
            <div className={styles.browser}>
              <Flex className={styles.browserTop} vertical="center">
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.domain}>{project.domain}</span>
              </Flex>
              <div className={styles.browserHero}>
                <span className={styles.kicker}>{project.sector}</span>
                <strong>{project.title}</strong>
                <span>{project.highlight}</span>
              </div>
              <div className={styles.browserGrid}>
                {project.sections.map((section) => (
                  <span key={section}>{section}</span>
                ))}
              </div>
            </div>
            <Column gap="12" padding="20" className={styles.cardBody}>
              <Flex gap="8" wrap>
                <span className={styles.tag}>{project.status}</span>
                <span className={styles.tag}>{project.recoverability}</span>
              </Flex>
              <Heading as="h2" variant="heading-strong-m">
                {project.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.finding}
              </Text>
              <Text variant="label-default-s" onBackground="brand-weak">
                Ver reconstrucción
              </Text>
            </Column>
          </a>
        ))}
      </section>

      <Column gap="16" paddingBottom="64">
        <Flex horizontal="space-between" vertical="end" gap="16" wrap>
          <Column gap="4">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Archivo pendiente
            </Text>
            <Heading as="h2" variant="heading-strong-l">
              Sitios para recuperacion historica
            </Heading>
          </Column>
          <Button href="/web-design/importadora-ivma" variant="secondary" size="s">
            Ver ejemplo
          </Button>
        </Flex>
        <div className={styles.archiveGrid}>
          {archivedProjects.map((project) => (
            <a
              key={project.slug}
              href={`/web-design/${project.slug}`}
              className={styles.archiveItem}
              style={{ "--accent": project.accent } as CSSProperties}
            >
              <span className={styles.archiveMark} />
              <span>
                <strong>{project.title}</strong>
                <small>{project.domain}</small>
              </span>
              <em>{project.level}</em>
            </a>
          ))}
        </div>
      </Column>
    </Column>
  );
}
