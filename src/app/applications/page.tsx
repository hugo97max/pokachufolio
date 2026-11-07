import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import styles from "./applications.module.scss";

const applications = {
  title: "Aplicaciones",
  description: `Aplicaciones, interfaces y productos digitales diseñados por ${person.name}`,
};

const applicationItems = [
  {
    title: "Cazadores de pulgadas",
    eyebrow: "Dashboard / resultados del Mundial",
    brand: "Ferrisariato",
    description:
      "Aplicación creada para analizar todas las capturas de pulgadas que se subieron durante el Mundial en el evento Cazadores de pulgadas. La vista pública queda como dashboard de resultados por usuarios, países, partidos y tamaños detectados.",
    status: "Sitio público",
    href: "https://base-de-datos-capturas-mundial.vercel.app",
    marker: "CP",
    cover: "worldCup",
  },
  {
    title: "Sipsopa Layout",
    eyebrow: "Retail / simulación Amazon",
    brand: "Sipsopa",
    description:
      "Layout preparado para presentar como se vería Sipsopa dentro de una tienda tipo Amazon. El prototipo simula el área de compras y acompaña el trabajo de branding desarrollado para la marca.",
    status: "Sitio público",
    href: "https://frame-visual-board.pokachu.chatgpt.site",
    marker: "SI",
    cover: "zipsopa",
  },
];

export async function generateMetadata() {
  const title = applications.title;
  const description = applications.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/applications`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
  };
}

export default function Applications() {
  return (
    <Column maxWidth="l" fillWidth gap="xl" paddingX="l">
      <Column className={styles.hero} fillWidth gap="m" paddingTop="64" paddingBottom="24">
        <Text variant="label-default-s" onBackground="brand-weak">
          {person.name}
        </Text>
        <Heading variant="display-strong-l">{applications.title}</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Herramientas, dashboards y prototipos interactivos desarrollados para resolver tareas concretas de marca,
          archivo y visualización.
        </Text>
      </Column>

      <section className={styles.grid} aria-label="Aplicaciones del portafolio">
        {applicationItems.map((app) =>
          app.href ? (
            <a
              key={app.title}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <ApplicationCard app={app} />
            </a>
          ) : (
            <article key={app.title} className={`${styles.card} ${styles.pendingCard}`} aria-disabled="true">
              <ApplicationCard app={app} />
            </article>
          ),
        )}
      </section>
    </Column>
  );
}

function ApplicationCard({ app }: { app: (typeof applicationItems)[number] }) {
  return (
    <>
      <div className={`${styles.appPreview} ${styles[app.cover]}`} aria-hidden="true">
        <span className={styles.coverArtwork}>
          {app.cover === "worldCup" ? (
            <>
              <span className={styles.scoreboard}>
                <small>Total capturas</small>
                <strong>1663</strong>
              </span>
              <span className={styles.metricRow}>
                <b>43"</b>
                <b>58"</b>
                <b>65"</b>
              </span>
              <span className={styles.pitchGrid} />
            </>
          ) : (
            <>
              <span className={styles.shopHeader}>amazon layout</span>
              <span className={styles.productCan}>
                <strong>{app.marker}</strong>
              </span>
              <span className={styles.buyBar}>brand shelf</span>
            </>
          )}
        </span>
        <span className={styles.statusPill}>{app.status}</span>
      </div>
      <Column gap="12" padding="20" className={styles.cardBody}>
        <Text variant="label-default-s" onBackground="brand-weak">
          {app.eyebrow}
        </Text>
        <span className={styles.brandTag}>Marca: {app.brand}</span>
        <Heading as="h2" variant="heading-strong-m">
          {app.title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {app.description}
        </Text>
      </Column>
    </>
  );
}
