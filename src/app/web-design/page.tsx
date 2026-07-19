import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, webDesign } from "@/app/resources/content";
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
  return (
    <Column maxWidth="m" fillWidth gap="xl">
      <Column className={styles.hero} fillWidth gap="m" paddingBottom="xl">
        <Text variant="label-default-s" onBackground="brand-weak">
          {person.name}
        </Text>
        <Heading variant="display-strong-l">{webDesign.title}</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Homepages, interfaces y experiencias web con dirección visual propia.
        </Text>
      </Column>

      <Flex className={styles.canvas} fillWidth horizontal="center" vertical="center" padding="24">
        <Column className={styles.preview}>
          <Flex className={styles.previewTop}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </Flex>
          <div className={styles.previewGrid}>
            <div className={styles.previewLines}>
              <span className={`${styles.line} ${styles.lineStrong}`} />
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </div>
            <div className={styles.visual} />
          </div>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Lista base preparada para cargar los diseños web seleccionados.
          </Text>
        </Column>
      </Flex>
    </Column>
  );
}
