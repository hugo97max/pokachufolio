import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import webDesignAssets from "@/app/resources/webDesignAssets.json";
import { webDesignProjects } from "@/app/resources/webDesignProjects";
import { WebHomeReplica } from "../../_components/WebHomeReplica";
import styles from "./replica.module.scss";

interface WebDesignReplicaParams {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return webDesignProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: WebDesignReplicaParams) {
  const project = webDesignProjects.find((item) => item.slug === params.slug);

  if (!project) {
    return;
  }

  const title = `${project.title} - Home replicado`;
  const description = `Replica estatica del home de ${project.domain} dentro del portafolio de diseno web.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${baseURL}/web-design/${project.slug}/replica`,
      images: [
        {
          url: `https://${baseURL}/og?title=${encodeURIComponent(project.title)}`,
          alt: title,
        },
      ],
    },
  };
}

export default function WebDesignReplica({ params }: WebDesignReplicaParams) {
  const project = webDesignProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const images = webDesignAssets[project.slug]?.images ?? [];

  return (
    <main className={styles.page} style={{ "--accent": project.accent } as CSSProperties}>
      <section className={styles.toolbar}>
        <Column gap="8">
          <Button href={`/web-design/${project.slug}`} variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
            Volver a ficha
          </Button>
          <Heading as="h1" variant="display-strong-s">
            {project.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Visualizacion directa del home replicado. Esta ruta queda lista para convertir tus capturas o PDFs en HTML/CSS propio.
          </Text>
        </Column>
        <Flex gap="8" wrap className={styles.actions}>
          {project.url && (
            <Button href={project.url} target="_blank" rel="noopener noreferrer" variant="secondary" size="s">
              Ver sitio original
            </Button>
          )}
          <span>{project.status}</span>
        </Flex>
      </section>

      <WebHomeReplica project={project} images={images} />
    </main>
  );
}
