import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { portfolioProjects } from "@/app/resources/portfolio";
import styles from "./portfolio.module.scss";

function getOwnerName(owner) {
  return typeof owner === "string" ? owner : owner.name;
}

function getOwnerAvatar(owner) {
  return typeof owner === "string" ? "" : owner.avatar;
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

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
        {portfolioProjects.map((project, index) => {
          const owners = project.team || [];

          return (
            <a
              key={project.slug}
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              aria-label={`Abrir ${project.title} en Behance`}
            >
              <Flex className={styles.coverWrap}>
                {project.cover ? (
                  <img
                    src={project.cover}
                    alt={`Portada del proyecto ${project.title}`}
                    className={styles.cover}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                ) : (
                  <Column horizontal="center" vertical="center" gap="8" className={styles.coverFallback}>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Behance
                    </Text>
                    <Text variant="heading-strong-m" align="center">
                      {project.title}
                    </Text>
                  </Column>
                )}
              </Flex>

              <Column gap="16" padding="20" className={styles.cardBody}>
                <Flex gap="8" wrap className={styles.metaRow}>
                  <span className={styles.meta}>{project.category}</span>
                  {project.date && <span className={styles.meta}>{project.date}</span>}
                </Flex>

                <Heading as="h2" variant="heading-strong-m" className={styles.cardTitle}>
                  {project.title}
                </Heading>

                {owners.length > 0 && (
                  <Column gap="8" className={styles.ownersBlock}>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Owners / co-owners
                    </Text>
                    <Flex gap="8" vertical="center" className={styles.ownerRow}>
                      <div className={styles.avatarStack} aria-hidden="true">
                        {owners.slice(0, 5).map((owner) => {
                          const name = getOwnerName(owner);
                          const avatar = getOwnerAvatar(owner);

                          return (
                            <span key={name} className={styles.ownerAvatar} title={name}>
                              {avatar ? <img src={avatar} alt="" /> : getInitials(name)}
                            </span>
                          );
                        })}
                      </div>
                      <Text variant="body-default-xs" onBackground="neutral-weak" className={styles.ownerNames}>
                        {owners.map(getOwnerName).join(", ")}
                      </Text>
                    </Flex>
                  </Column>
                )}

                {project.recognition && <span className={styles.recognition}>{project.recognition}</span>}
              </Column>
            </a>
          );
        })}
      </section>
    </Column>
  );
}
