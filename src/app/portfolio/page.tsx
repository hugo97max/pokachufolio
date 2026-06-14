import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

const behanceUrl = "https://www.behance.net/hugo97max";

export async function generateMetadata() {
  const title = "Portafolio";
  const description = `Proyectos actualizados de ${person.name} en Behance.`;
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
    <Column maxWidth="l" gap="xl">
      <Column fillWidth gap="m" paddingTop="64">
        <Heading variant="display-strong-l">Portafolio</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Mis proyectos más recientes publicados en Behance, reunidos en un solo lugar.
        </Text>
        <Flex paddingTop="8" gap="12" wrap>
          <Button href={behanceUrl} prefixIcon="behance" label="Ver en Behance" variant="secondary" />
        </Flex>
      </Column>

      <Flex
        fillWidth
        border="neutral-medium"
        radius="m"
        overflow="hidden"
        background="surface"
        style={{ minHeight: "760px" }}
      >
        <iframe
          title="Behance portfolio de Hugo Macias"
          src={behanceUrl}
          style={{
            width: "100%",
            minHeight: "760px",
            border: 0,
            background: "#050505",
          }}
          loading="lazy"
        />
      </Flex>
    </Column>
  );
}
