import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hugo",
  lastName: "Macias",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Diseñador Gráfico Senior | Diseñador Web UX/UI",
  avatar: "/images/avatar.jpg",
  location: "America/Guayaquil", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Ingles"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
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
  headline: <>Diseñador Gráfico Senior</>,
  subline: (
    <>
      Hola, soy Hugo <InlineCode>Pokachu</InlineCode>. Diseñador gráfico y web con experiencia en branding, contenido para redes de multimarcas y desarrollo de key visuals. Con habilidades en diseño de interfaces y experiencia de usuario UX/UI, combinando creatividad y estrategia para un generar impacto visual.
    </>
  ),
};

const about = {
  label: "Conóceme",
  title: "Conoce más de mi",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
    description: (
      <>
        Soy diseñador creativo y apasionado con experiencia en diseño gráfico, publicidad, branding, packaging, identidad corporativa, marketing digital y diseño web. Me especializo en la creación de contenido personalizado, gestión de redes sociales, producción audiovisual, programación frontend y diseño web UI/UX, siempre enfocado en ofrecer soluciones visuales funcionales y atractivas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia laboral",
    experiences: [
      {
        company: "Quantumbit QBIT",
        timeframe: "Jul 2024 - Actualidad",
        role: "Diseñador Gráfico Senior, Diseñador web UX/UI",
        achievements: [
          <>
            Como diseñador gráfico senior, he desarrollado identidades visuales y materiales gráficos impactantes para diversas marcas, trabajando en la producción de contenido digital, key visuals y campañas para empresas como Grupo Marriott, Intaco, Chiveria, AustroRed, Proquim, Cartago, Almacopio, Albosuites, AguaBendita, Autocorner, Bristol Place.
          </>,
          <>
            Además, tengo experiencia en la creación y optimización de campañas publicitarias en Meta y Google, con un enfoque en maximizar el rendimiento y la conversión mediante estrategias creativas y una segmentación efectiva.
          </>,
          <>
            Tengo experiencia como diseñador web UX/UI, creando interfaces intuitivas y atractivas centradas en el usuario. Mi enfoque ha sido optimizar la usabilidad y la interacción en sitios web y aplicaciones, trabajando de cerca con equipos de desarrollo para asegurar que los diseños sean estéticamente agradables y técnicamente viables.
          </>,
        ],
        images: [],
      },
      {
        company: "Grupo Ronquillo Sandoya",
        timeframe: "Jul 2021 - Abr 2024",
        role: "Diseñador Gráfico Senior, Diseñador Web, CM y Fotógrafo",
        achievements: [
          <>
            Realicé material digital para redes sociales y campañas publicitarias, desarrollando piezas visuales impactantes que comunican efectivamente el mensaje de cada marca. Además, cuento con experiencia en producción audiovisual y spots publicitarios, asegurando un contenido dinámico y de alta calidad.
          </>,
          <>
            También he trabajado en el rebranding de marcas y el desarrollo de identidades corporativas sólidas, alineadas con su esencia y valores. Gestiono estrategias de marketing digital, diseño y desarrollo páginas web, y tengo habilidades en fotografía y edición profesional para potenciar la imagen visual de cada proyecto.
          </>,
        ],
        images: [],
      },
      {
        company: "IVMA Importer",
        timeframe: "Feb 2023 - Ago 2023",
        role: "Diseñador Gráfico Senior, CM y Fotógrafo",
        achievements: [
          <>
            Trabajé en la creación de contenido digital y rediseño de marca, desarrollando material gráfico para publicidad y redes sociales. Además, diseñé y mantuve una página web eCommerce, y realicé producción fotográfica y edición.
          </>
        ],
        images: [],
      },
      {
        company: "FCS Ecuador",
        timeframe: "Jul 2021 - Feb 2024",
        role: "Diseñador Gráfico Senior y CM",
        achievements: [
          <>
            Trabajé en el diseño de branding, páginas web e identidad visual para Kerd, Etika y Regalart, subempresas de FCS Ecuador. Me encargué de crear materiales visuales para redes sociales y estrategias de marca, además de desarrollar e implementar rebranding para cada empresa. También gestioné comunidades digitales como Community Manager y diseñé artes pop para campañas visuales, fortaleciendo la identidad visual y la comunicación de las marcas tanto en entornos digitales como físicos.
          </>
        ],
        images: [],
      },
      {
        company: "Ecuador Video | Farandula Ecuatoriana",
        timeframe: "Ene 2020 - Jul 2021",
        role: "Diseñador Gráfico Senior y periodista",
        achievements: [
          <>
            Responsable de la creación de contenido digital para redes sociales y plataformas multimedia de noticias políticas, asegurando una comunicación efectiva y atractiva. Realicé investigaciones periodísticas para generar contenido informativo, produje y edité material audiovisual, gestioné redes sociales como Community Manager.
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

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Proyectos",
  title: "Proyectos",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galeria",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/g post-6.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
