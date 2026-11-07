import { Column, Heading } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import styles from "@/components/portfolio/portfolio.module.scss";

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

      <PortfolioGrid />
    </Column>
  );
}
