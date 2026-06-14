import { notFound } from "next/navigation";
import { Button, Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { portfolioProjects } from "@/app/resources/portfolio";
import styles from "../portfolio.module.scss";

interface PortfolioProjectParams {
  params: {
    slug: string;
  };
}

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

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PortfolioProjectParams) {
  const project = portfolioProjects.find((item) => item.slug === params.slug);

  if (!project) {
    return;
  }

  return {
    title: project.title,
    description: `Proyecto de portafolio de ${person.name}`,
    openGraph: {
      title: project.title,
      description: `Proyecto de portafolio de ${person.name}`,
      type: "article",
      url: `https://${baseURL}/portfolio/${project.slug}`,
      images: project.cover
        ? [
            {
              url: project.cover,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: `Proyecto de portafolio de ${person.name}`,
      images: project.cover ? [project.cover] : [],
    },
  };
}

export default function PortfolioProject({ params }: PortfolioProjectParams) {
  const project = portfolioProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const owners = project.team || [];

  return (
    <Column as="section" maxWidth="l" gap="xl" paddingX="l" paddingTop="64" paddingBottom="64">
      <Column maxWidth="s" gap="16">
        <Button href="/portfolio" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Portafolio
        </Button>
        <Text variant="label-default-s" onBackground="brand-weak">
          {project.category}
        </Text>
        <Heading variant="display-strong-s">{project.title}</Heading>
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
      </Column>

      <Column className={styles.detailHero}>
        {project.cover ? (
          <img src={project.cover} alt={`Portada del proyecto ${project.title}`} className={styles.detailCover} />
        ) : (
          <Column horizontal="center" vertical="center" gap="8" className={styles.detailCoverFallback}>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Behance
            </Text>
            <Text variant="heading-strong-l" align="center">
              {project.title}
            </Text>
          </Column>
        )}
        <Column gap="24" padding="32">
          <div className={styles.detailMeta}>
            {project.role && (
              <Column gap="4" className={styles.metaBlock}>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  Rol
                </Text>
                <Text variant="body-strong-m">{project.role}</Text>
              </Column>
            )}
            {project.date && (
              <Column gap="4" className={styles.metaBlock}>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  Fecha
                </Text>
                <Text variant="body-strong-m">{project.date}</Text>
              </Column>
            )}
            <Column gap="4" className={styles.metaBlock}>
              <Text variant="label-default-s" onBackground="neutral-weak">
                Enfoque
              </Text>
              <Text variant="body-strong-m">{project.category}</Text>
            </Column>
          </div>

          {project.recognition && (
            <Column gap="8" padding="20" className={styles.recognitionBlock}>
              <Text variant="label-default-s" onBackground="accent-weak">
                Reconocimiento
              </Text>
              <Text variant="body-strong-m">{project.recognition}</Text>
            </Column>
          )}
        </Column>
      </Column>

      <Column maxWidth="m" gap="24">
        {project.highlights?.length > 0 && (
          <ul className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlight}>
                <Text variant="body-default-m">{highlight}</Text>
              </li>
            ))}
          </ul>
        )}
      </Column>
    </Column>
  );
}
