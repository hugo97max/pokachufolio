import styles from "./destileriaHomeReplica.module.scss";

const destileriaImage = (file: string) => `/images/web-design/destileria/${file}`;

const clientLogos = [
  {
    name: "Delirio",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-45.svg",
  },
  {
    name: "Veris",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-47.svg",
  },
  {
    name: "Calbaq",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-46.svg",
  },
  {
    name: "Renteco",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-49.svg",
  },
  {
    name: "Faber Castell",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-50.svg",
  },
  {
    name: "Poly Ugarte",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-51.svg",
  },
  {
    name: "Comsucre",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-52.svg",
  },
  {
    name: "UMET",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-54.svg",
  },
  {
    name: "Food Garden",
    src: "https://destileria.ec/wp-content/uploads/2025/07/Mark-55.svg",
  },
];

const works = [
  {
    client: "Alprecio",
    title: "No le regales cualquier huev***",
    image: destileriaImage("work-no-le-regales.webp"),
  },
  {
    client: "Maxell",
    title: "Distracted",
    image: destileriaImage("work-distracted.webp"),
  },
  {
    client: "Motorscorp",
    title: "La Mama de las Chaquetas",
    image: destileriaImage("work-mama-chaquetas.webp"),
  },
  {
    client: "Maxell",
    title: "Underwater",
    image: destileriaImage("work-underwater.webp"),
  },
  {
    client: "LaGanga",
    title: "Manual de Equidad en el Hogar #8M",
    image: destileriaImage("work-manual-equidad.webp"),
  },
  {
    client: "LaGanga",
    title: "Descuento de por vida",
    image: destileriaImage("work-descuento-vida.webp"),
  },
];

const academy = [
  {
    title: "Crea campanas con intencion de compra, optimiza con data real y escala con smart bidding.",
    image: "",
  },
  {
    title: "Domina TikTok y crea anuncios que se sienta como contenido organico que vende como locos.",
    image: "",
  },
  {
    title: "Disena y escala campanas de alto rendimiento dominando Meta Business desde el primer clic.",
    image: "",
  },
];

const shots = [
  {
    title: "Antonio Jimenez, el arte de destilar ideas embriagantes",
    image: "",
  },
  {
    title: "La Destileria Creativa / Antonio Jimenez: Destilando las ideas",
    image: "",
  },
  {
    title: "MRStrategy / Monica Rumbea: Agregar valor a las ideas de negocio",
    image: "",
  },
];

const logoMarqueeGroups = [clientLogos, clientLogos];

interface DestileriaHomeReplicaProps {
  images?: string[];
}

function DestileriaLogo() {
  return (
    <img
      className={styles.destileriaLogo}
      src="/images/web-design/destileria/logo.svg"
      alt="Destileria"
      loading="eager"
    />
  );
}

export function DestileriaHomeReplica({ images: _images = [] }: DestileriaHomeReplicaProps) {
  const fallbackImage = works[0]?.image || _images[0] || "";

  const featuredSlides = [
    {
      client: "Motorscorp",
      title: "La Mama de las Chaquetas",
      count: "1 of 6",
      image: works[2]?.image || fallbackImage,
      eyebrow: "Brand experience",
    },
    {
      client: "Al Precio",
      title: "No le regales cualquier huev***",
      count: "2 of 6",
      image: works[0]?.image || fallbackImage,
      eyebrow: "Retail campaign",
    },
    {
      client: "Maxell",
      title: "Distracted",
      count: "3 of 6",
      image: works[1]?.image || fallbackImage,
      eyebrow: "Animated key visual",
    },
    {
      client: "Maxell",
      title: "Underwater",
      count: "4 of 6",
      image: works[3]?.image || fallbackImage,
      eyebrow: "Motion feature",
    },
    {
      client: "La Ganga",
      title: "Manual de Equidad en el Hogar #8M",
      count: "5 of 6",
      image: works[4]?.image || fallbackImage,
      eyebrow: "Content system",
    },
    {
      client: "La Ganga",
      title: "Descuento de por vida",
      count: "6 of 6",
      image: works[5]?.image || fallbackImage,
      eyebrow: "Promotion",
    },
  ];

  return (
    <article className={styles.destileria} data-replica-root="destileria">
      <header className={styles.header}>
        <a className={styles.logo} href="/web-design/destileria/replica" aria-label="Destileria replica">
          <DestileriaLogo />
        </a>
        <nav aria-label="Menu Destileria">
          <span>Trabajos</span>
          <span>Nosotros</span>
          <span>Academia</span>
          <span>Noticias</span>
          <span>Contacto</span>
        </nav>
      </header>

      <section className={styles.featured} aria-label="Featured carousel">
        <div className={styles.heroAmbient} aria-hidden="true">
          {fallbackImage && <img src={fallbackImage} alt="" />}
          {works[1]?.image && <img src={works[1].image} alt="" />}
        </div>
        <div className={styles.featuredTrack}>
          {featuredSlides.map((slide) => (
            <article className={styles.featuredSlide} key={slide.title}>
              <div className={styles.featuredCopy}>
                <small>{slide.eyebrow} / Cliente {slide.client}</small>
                <h1>{slide.title}</h1>
                <a>Ver mas</a>
              </div>
              <div className={styles.videoFrame}>
                {slide.image ? (
                  <img src={slide.image} alt="" loading={slide.count === "1 of 6" ? "eager" : "lazy"} />
                ) : (
                  <span className={styles.videoPlaceholder}>{slide.title}</span>
                )}
                <span>{slide.count}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.logoStrip} aria-label="Marcas clientes">
        <div className={styles.logoMarquee}>
          {logoMarqueeGroups.map((group, groupIndex) => (
            <div className={styles.logoGroup} key={`logos-${groupIndex}`} aria-hidden={groupIndex > 0 ? "true" : undefined}>
              {group.map((brand) => (
                <span key={`${brand.name}-${groupIndex}`} className={styles.clientLogo}>
                  <img src={brand.src} alt={`Logo blanco de la marca ${brand.name}`} loading="lazy" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.intro}>
        <h2>
          Nos tomamos el <mark>disfrute creativo</mark> muy en serio
        </h2>
        <p>
          Destileria es una agencia creativa en Ecuador que transforma branding, pensamiento creativo y cultura pop en
          campanas que embriagan de ideas, conectan con audiencias y provocan un impacto medible.
        </p>
        <p>
          No jugamos a ser creativos. Creemos en la creatividad de verdad. Esa que nace de una alquimia precisa entre vision
          y ejecucion que, cuando se refina bien, deja resultados reales en cada sorbo.
        </p>
        <a>Brindemos juntos</a>
      </section>

      <section className={styles.workSection}>
        <h2>
          Marcas que ya se <mark>sirvieron un trago</mark>
        </h2>
        <div className={styles.workGrid}>
          {works.map((work) => (
            <article key={work.title} className={styles.workCard}>
              {work.image || fallbackImage ? (
                <img src={work.image || fallbackImage} alt="" loading="lazy" />
              ) : (
                <span className={styles.cardFallback}>{work.title}</span>
              )}
              <small>Cliente {work.client}</small>
              <h3>{work.title}</h3>
            </article>
          ))}
        </div>
        <a className={styles.outlineButton}>Emborrachate de creatividad</a>
      </section>

      <section className={styles.academy}>
        <div className={styles.academyHeader}>
          <h2>
            Academia <mark>La Destileria</mark>
          </h2>
          <p>
            Aprende con profesionales multipremiados de nuestra agencia todas las habilidades y secretos de la comunicacion,
            el marketing y la publicidad.
          </p>
        </div>
        <div className={styles.academyGrid}>
          {academy.map((course) => (
            <article key={course.title}>
              {course.image || fallbackImage ? (
                <img src={course.image || fallbackImage} alt="" loading="lazy" />
              ) : (
                <span className={styles.cardFallback}>Intensivos</span>
              )}
              <small>Intensivos</small>
              <h3>{course.title}</h3>
            </article>
          ))}
        </div>
        <a>Conoce nuestra academia</a>
      </section>

      <section className={styles.shots}>
        <h2>
          <mark>Shots</mark> informativos
        </h2>
        <div className={styles.shotGrid}>
          {shots.map((shot) => (
            <article key={shot.title}>
              {shot.image || fallbackImage ? (
                <img src={shot.image || fallbackImage} alt="" loading="lazy" />
              ) : (
                <span className={styles.cardFallback}>Prensa</span>
              )}
              <small>Prensa</small>
              <h3>{shot.title}</h3>
            </article>
          ))}
        </div>
        <a className={styles.outlineButton}>Lo ultimo que se destilo</a>
      </section>

      <div className={styles.ticker}>
        <span>
          Creatividad pura - Pasion pura - Produccion pura - Innovacion pura - Contenido puro - Estrategia pura - Data pura -
        </span>
      </div>

      <footer className={styles.footer}>
        <div>
          <DestileriaLogo />
          <p>Agencia creativa que mezcla estrategia, contenido y cultura pop para servir campanas que embriagan al mercado.</p>
          <a>Agenda tu trago creativo</a>
        </div>
        <div>
          <h3>Catemos ideas</h3>
          <span>Trabajos</span>
          <span>Nosotros</span>
          <span>Academia</span>
          <span>Noticias</span>
          <span>Contacto</span>
        </div>
        <div>
          <h3>Te quedaste con ganas?</h3>
          <p>Contacto directo con la barra:</p>
          <span>info@destileria.ec</span>
          <span>press@destileria.ec</span>
          <div className={styles.socials}>
            <span>ig</span>
            <span>in</span>
            <span>tk</span>
          </div>
        </div>
      </footer>
    </article>
  );
}
