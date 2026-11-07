import Image from "next/image";
import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { portfolioProjects } from "@/app/resources/portfolio";
import styles from "./portfolio.module.scss";

type Owner = string | { name: string; role?: string; avatar?: string };

const ownerName = (owner: Owner) => (typeof owner === "string" ? owner : owner.name);
const ownerAvatar = (owner: Owner) => (typeof owner === "string" ? "" : (owner.avatar ?? ""));
const ownerRole = (owner: Owner) => (typeof owner === "string" ? "" : (owner.role ?? ""));

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

interface PortfolioGridProps {
  /** Muestra solo los primeros N proyectos. */
  limit?: number;
  /** Muestra el equipo (owners / co-owners) en cada tarjeta. */
  showOwners?: boolean;
  label?: string;
}

export function PortfolioGrid({ limit, showOwners = true, label = "Proyectos de portafolio" }: PortfolioGridProps) {
  const projects = limit ? portfolioProjects.slice(0, limit) : portfolioProjects;

  return (
    <section className={styles.grid} aria-label={label}>
      {projects.map((project, index) => {
        const owners: Owner[] = showOwners ? (project.team ?? []) : [];

        return (
          <a
            key={project.slug}
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`Abrir ${project.title} en Behance (se abre en una pestaña nueva)`}
          >
            <Flex className={styles.coverWrap}>
              {project.cover ? (
                <Image
                  src={project.cover}
                  alt={`Portada del proyecto ${project.title}`}
                  className={styles.cover}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
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
                      const name = ownerName(owner);
                      const avatar = ownerAvatar(owner);
                      const role = ownerRole(owner);

                      return (
                        <div key={name} className={styles.ownerItem}>
                          <span className={styles.ownerAvatar} title={name}>
                            {avatar ? <img src={avatar} alt="" loading="lazy" decoding="async" /> : getInitials(name)}
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
  );
}
