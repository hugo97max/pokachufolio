import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hugo",
  lastName: "Macias",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Director de Arte | UX/UI",
  avatar: "/images/avatar.webp",
  location: "Ecuador/Guayaquil",
  languages: ["Español", "Ingles"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/hugo97max",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hugo97max/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hugo97max@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} - Portafolio`,
  description: `Conoce más sobre mis proyectos.`,
  headline: <>Director de Arte</>,
  subline: (
    <>
      Hola, soy Hugo <InlineCode>Pokachu</InlineCode>. Director de arte enfocado en conceptualización visual, campañas, branding, key visuals y sistemas visuales para marcas. También desarrollo experiencias web UX/UI, combinando estrategia, narrativa y dirección estética para generar impacto visual.
    </>
  ),
};

const about = {
  label: "Conóceme",
  title: "Conoce más de mi",
  description: `Conoce a ${person.name}, ${person.role}, desde Guayaquil, Ecuador`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    // Texto plano para metadatos y JSON-LD (el JSX de abajo es solo para mostrar en pantalla).
    summary:
      "Director de arte con experiencia en campañas, branding, packaging, identidad corporativa, marketing digital y diseño web.",
    description: (
      <>
        Soy director de arte con experiencia en campañas, branding, packaging, identidad corporativa, marketing digital y diseño web. Me especializo en transformar ideas en sistemas visuales claros: desde la conceptualización y el desarrollo de key visuals hasta la dirección estética de piezas para marcas, productos y comunicación.
      </>
    ),
  },
  awards: {
    display: true,
    title: "Premios ganados",
    items: [
      {
        title: "WINA - World Independent Advertising Awards",
        organization: "WINA Festival",
        timeframe: "6 premios",
        mark: "WINA",
        icon: "/images/awards/wina.svg",
        result: "Winner",
        count: "6 premios",
        description: (
          <>
            Reconocimientos obtenidos en WINA, festival internacional que destaca el trabajo de agencias y talentos creativos independientes alrededor del mundo.
          </>
        ),
      },
      {
        title: "FePI - Festival Internacional de la Publicidad Independiente",
        organization: "FePI",
        timeframe: "5 premios",
        mark: "FePI",
        icon: "/images/awards/fepi.svg",
        result: "Winner",
        count: "5 premios",
        description: (
          <>
            Premios obtenidos en FePI, festival dedicado a reconocer la creatividad independiente y el trabajo de agencias y profesionales indies.
          </>
        ),
      },
      {
        title: "El Ojo de Iberoamérica",
        organization: "Festival Internacional El Ojo de Iberoamérica",
        timeframe: "1 shortlist",
        mark: "El Ojo",
        icon: "",
        result: "Shortlist",
        count: "1 shortlist",
        description: (
          <>
            Selección en shortlist dentro de uno de los festivales iberoamericanos más importantes para la creatividad, la comunicación y el entretenimiento.
          </>
        ),
      },
      {
        title: "Lürzer’s Archive",
        organization: "Lürzer’s Archive",
        timeframe: "Mención editorial",
        mark: "L[A]",
        icon: "/images/awards/luerzers-archive.svg",
        result: "Featured",
        count: "Mención",
        description: (
          <>
            Mención para Sonidos del Mas Allá en Lürzer’s Archive, publicación internacional especializada en creatividad publicitaria.
          </>
        ),
      },
    ],
  },
  references: {
    display: true,
    title: "Referencias personales",
    items: [
      {
        name: "César Sepúlveda",
        role: "Director creativo",
        contact: "099 488 6685",
      },
      {
        name: "Ing. Nicolás Franco",
        role: "Ejecutivo de Cuentas",
        contact: "093 910 2969",
      },
      {
        name: "José Muzo",
        role: "Proyectos Freelance",
        contact: "099 677 9474",
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia laboral",
    experiences: [
      {
        company: "Uppley Digital",
        timeframe: "Ago 2026 - Actualidad",
        role: "Director de Arte, Diseñador Gráfico",
        achievements: [
          <>
            Lidero la dirección de arte y el diseño gráfico de campañas, identidades de marca y piezas digitales, traduciendo la estrategia en conceptos visuales claros y coherentes. Desarrollo key visuals, sistemas gráficos y contenido multimedia para distintos formatos y canales.
          </>,
        ],
        images: [],
      },
      {
        company: "Destileria Creativa",
        timeframe: "May 2025 - Ago 2026",
        role: "Director de Arte, Diseñador web UX/UI",
        achievements: [
          <>
            Defino la dirección de arte y diseño multimedia para campañas 360°, creando conceptos sólidos que conectan la narrativa de marca con el público. Desarrollo key visuals, branding, sistemas gráficos y piezas para medios digitales e impresos, además de producir assets multimedia como motion graphics, video y contenidos interactivos.</>,
          <>
            Trabajo en estrecha colaboración con los equipos de estrategia y cuentas para traducir insights en propuestas visuales de alto impacto. Gestiono el proceso creativo desde el boceto hasta la entrega final, asegurando coherencia estética y eficacia en alcance y engagement.
          </>
        ],
        images: [],
      },
      {
        company: "Quantumbit QBIT",
        timeframe: "Jul 2024 - May 2025",
        role: "Diseñador gráfico senior, Diseñador web UX/UI",
        achievements: [
          <>
            Desarrollé identidades visuales, sistemas gráficos, key visuals y campañas para marcas como Grupo Marriott, Intaco, Chiveria, AustroRed, Proquim, Cartago, Almacopio, Albosuites, AguaBendita, Autocorner y Bristol Place, cuidando la coherencia estética y la fuerza conceptual de cada pieza.
          </>,
          <>
            Participé en la creación y optimización de campañas publicitarias en Meta y Google, combinando estrategia creativa, segmentación y dirección visual para mejorar rendimiento, alcance y conversión.
          </>,
          <>
            También desarrollé interfaces UX/UI centradas en claridad, usabilidad y experiencia de marca, trabajando de cerca con equipos de desarrollo para convertir propuestas visuales en productos digitales viables.
          </>,
        ],
        images: [],
      },
      {
        company: "Grupo Ronquillo Sandoya",
        timeframe: "Jul 2021 - Abr 2024",
        role: "Diseñador gráfico senior, Diseñador Web, CM y Fotógrafo",
        achievements: [
          <>
            Desarrollé campañas, contenido digital y piezas audiovisuales para redes sociales, construyendo una línea visual coherente para distintas marcas y formatos de comunicación.
          </>,
          <>
            Lideré procesos de rebranding, identidad corporativa, marketing digital, diseño y desarrollo web, además de producción fotográfica y edición profesional para fortalecer la presencia visual de cada proyecto.
          </>,
        ],
        images: [],
      },
      {
        company: "IVMA Importer",
        timeframe: "Feb 2023 - Ago 2023",
        role: "Diseñador gráfico senior, CM y Fotógrafo",
        achievements: [
          <>
            Trabajé en la dirección visual de contenido digital, rediseño de marca, materiales para publicidad y redes sociales. También diseñé y mantuve una página web eCommerce, y realicé producción fotográfica y edición.
          </>
        ],
        images: [],
      },
      {
        company: "FCS Ecuador",
        timeframe: "Jul 2021 - Feb 2024",
        role: "Diseñador gráfico senior y CM",
        achievements: [
          <>
            Desarrollé branding, páginas web e identidad visual para Kerd, Etika y Regalart, subempresas de FCS Ecuador. Creé materiales para redes sociales, estrategias de marca y procesos de rebranding, fortaleciendo la comunicación visual de las marcas en entornos digitales y físicos.
          </>
        ],
        images: [],
      },
      {
        company: "Ecuador Video | Farandula Ecuatoriana",
        timeframe: "Ene 2020 - Jul 2021",
        role: "Creador de contenido visual y periodista",
        achievements: [
          <>
            Responsable de la creación de contenido digital para redes sociales y plataformas multimedia de noticias políticas. Realicé investigaciones periodísticas, producción audiovisual, edición y gestión de comunidades digitales.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formación académica",
    institutions: [
      {
        name: "Instituto Superior Tecnológico Babahoyo",
        description: <>2017 - 2020 | Tecnología Superior en Diseño Gráfico Publicitario.</>,
      },
      {
        name: "Unidad Educativa Teodoro Kelly",
        description: <>2011 - 2015 | Técnico de Servicios en Aplicaciones Informáticas.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Suite Adobe",
        description: <>Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects, Adobe Indesign.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma",
        description: <>Tengo experiencia en Figma como diseñador UI/UX, creando interfaces de usuario, prototipos interactivos y colaborando eficientemente con equipos de desarrollo, asegurando la fluidez en el proceso de diseño y la optimización de proyectos web y móviles.
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "WordPress, Elementor",
        description: <>Llevo años trabajando como diseñador y programador de páginas web en el entorno de WordPress. Actualmente, me especializo en la creación de sitios con Elementor, debido a la rapidez en la ejecución de proyectos y la facilidad de uso que ofrece a los clientes para la manipulación y actualización de sus páginas de manera autónoma.
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const work = {
  label: "Social Media",
  title: "Social Media",
  description: `Contenidos visuales, piezas digitales y sistemas de comunicación para redes desarrollados por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const webDesign = {
  label: "Diseños Web",
  title: "Diseños Web",
  description: `Exploraciones web, homepages y experiencias digitales diseñadas por ${person.name}`,
  projects: [],
};

export { person, social, home, about, work, webDesign };



