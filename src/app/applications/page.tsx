import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import styles from "./applications.module.scss";

const applications = {
  title: "Aplicaciones",
  description: `Aplicaciones, interfaces y productos digitales disenados por ${person.name}`,
};

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
          Aplicaciones, interfaces y productos digitales listos para documentarse como casos independientes dentro del
          portafolio.
        </Text>
      </Column>

      <section className={styles.emptyState} aria-label="Aplicaciones en preparacion">
        <div className={styles.deviceMockup} aria-hidden="true">
          <span />
          <strong>Apps</strong>
        </div>
        <Column gap="12">
          <Text variant="label-default-s" onBackground="brand-weak">
            Proximamente
          </Text>
          <Heading as="h2" variant="heading-strong-l">
            Casos de aplicaciones en preparacion
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Esta seccion queda lista para alojar aplicaciones moviles, dashboards, herramientas internas y productos
            digitales desarrollados por {person.name}.
          </Text>
        </Column>
      </section>
    </Column>
  );
}
