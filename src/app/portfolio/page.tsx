import Link from "next/link";
import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { portfolioProjects } from "@/app/resources/portfolio";
import styles from "./portfolio.module.scss";

export async function generateMetadata() {
  const title = "Portafolio";
  const description = `Proyectos seleccionados de ${person.name}, director de arte enfocado en campañas, sistemas visuales y narrativa de marca.`;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/portfolio`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Portfolio() {
  return (
    <Column maxWidth="l" gap="xl" paddingX="l">
      <Column fillWidth gap="m" paddingTop="64" paddingBottom="24" className={styles.hero}>
        <Text variant="label-default-s" onBackground="brand-weak">
          Portafolio propio
        </Text>
        <Heading variant="display-strong-l">Dirección de arte, campañas y sistemas visuales.</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" className={styles.heroText}>
          Una selección de proyectos construidos desde la conceptualización visual, el desarrollo de
          key visuals, branding, narrativa de marca y dirección estética para piezas digitales,
          impresas y de comunicación integrada.
        </Text>
      </Column>

      <section className={styles.grid} aria-label="Proyectos de portafolio">
        {portfolioProjects.map((project, index) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`} className={styles.card}>
            <Flex className={styles.coverWrap}>
              <img
                src={project.cover}
                alt={`Portada del proyecto ${project.title}`}
                className={styles.cover}
                loading={index < 3 ? "eager" : "lazy"}
              />
            </Flex>

            <Column gap="12" padding="20" className={styles.cardBody}>
              <Flex gap="8" wrap className={styles.metaRow}>
                <span className={styles.meta}>{project.category}</span>
                {project.date && <span className={styles.meta}>{project.date}</span>}
              </Flex>

              <Column gap="8">
                <Heading as="h2" variant="heading-strong-m" className={styles.cardTitle}>
                  {project.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak" className={styles.summary}>
                  {project.summary}
                </Text>
              </Column>

              <Flex gap="8" wrap>
                <span className={styles.role}>{project.role}</span>
                {project.recognition && <span className={styles.recognition}>{project.recognition}</span>}
              </Flex>
            </Column>
          </Link>
        ))}
      </section>
    </Column>
  );
}
