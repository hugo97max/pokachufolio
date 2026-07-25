import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import styles from "./applications.module.scss";

const applications = {
  title: "Aplicaciones",
  description: `Aplicaciones, interfaces y productos digitales disenados por ${person.name}`,
};

const applicationItems = [
  {
    title: "Cazadores de pulgadas",
    eyebrow: "Dashboard / resultados del Mundial",
    description:
      "Aplicacion de consulta para revisar capturas del Mundial por pulgadas, usuarios, paises y partidos. Quedara publicada como vista de resultados cuando la data final este disponible fuera del acceso privado de Vercel.",
    status: "Publicacion pendiente",
    href: "",
    marker: "CM",
  },
  {
    title: "ZipZopa Layout",
    eyebrow: "Sites / prototipo visual",
    description:
      "Layout interactivo preparado como pieza de aplicacion visual, publicado en ChatGPT Sites para abrirse sin login externo.",
    status: "Sitio publico",
    href: "https://frame-visual-board.pokachu.chatgpt.site",
    marker: "ZZ",
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
          archivo y visualizacion.
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
      <div className={styles.appPreview} aria-hidden="true">
        <span className={styles.deviceFrame}>
          <span className={styles.deviceTop} />
          <strong>{app.marker}</strong>
        </span>
        <span className={styles.statusPill}>{app.status}</span>
      </div>
      <Column gap="12" padding="20" className={styles.cardBody}>
        <Text variant="label-default-s" onBackground="brand-weak">
          {app.eyebrow}
        </Text>
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
