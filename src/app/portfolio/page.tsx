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

function getOwnerRole(owner) {
  return typeof owner === "string" ? "" : owner.role;
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
        <Heading variant="display-strong-l">Conoce más de mi portafolio</Heading>
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
                    <div className={styles.ownerList}>
                      {owners.map((owner) => {
                        const name = getOwnerName(owner);
                        const avatar = getOwnerAvatar(owner);
                        const role = getOwnerRole(owner);

                        return (
                          <div key={name} className={styles.ownerItem}>
                            <span className={styles.ownerAvatar} title={name}>
                              {avatar ? <img src={avatar} alt="" /> : getInitials(name)}
                            </span>
                            <span className={styles.ownerText}>
                              <span className={styles.ownerName}>{name}</span>
                              {role && <span className={styles.ownerRole}>{role}</span>}
                            </span>
                          </div>
                        );
                      })}
                    </div>
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
