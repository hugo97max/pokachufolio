import styles from "./destileriaHomeReplica.module.scss";

const clientLogos = [
  "delirio",
  "veris",
  "calbaq",
  "renteco",
  "faber",
  "poly",
  "comsucre",
  "umet",
  "foodgarden",
];

const works = [
  ["Alprecio", "No le regales cualquier huev***"],
  ["Maxell", "Distracted"],
  ["Motorscorp", "La Mama de las Chaquetas"],
  ["Maxell", "Underwater"],
  ["LaGanga", "Manual de Equidad en el Hogar #8M"],
  ["LaGanga", "Descuento de por vida"],
];

const academy = [
  "Crea campanas con intencion de compra, optimiza con data real y escala con smart bidding.",
  "Domina TikTok y crea anuncios que se sienta como contenido organico que vende como locos.",
  "Disena y escala campanas de alto rendimiento dominando Meta Business desde el primer clic.",
];

const shots = [
  "Antonio Jimenez, el arte de destilar ideas embriagantes",
  "La Destileria Creativa / Antonio Jimenez: Destilando las ideas",
  "MRStrategy / Monica Rumbea: Agregar valor a las ideas de negocio",
];

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

function ClientLogo({ name }: { name: string }) {
  switch (name) {
    case "delirio":
      return (
        <svg viewBox="0 0 150 42" role="img" aria-label="Delirio">
          <path d="M9 33c15-21 30-27 45-18 7 4 8 12 2 17-8 7-22 5-36-4" />
          <text x="47" y="28">Delirio</text>
        </svg>
      );
    case "veris":
      return (
        <svg viewBox="0 0 130 42" role="img" aria-label="veris">
          <text x="8" y="28">veris</text>
          <path d="M83 25l11 8 25-24" />
        </svg>
      );
    case "calbaq":
      return (
        <svg viewBox="0 0 150 42" role="img" aria-label="calbaq">
          <circle cx="24" cy="21" r="13" />
          <text x="44" y="28">calbaq</text>
        </svg>
      );
    case "renteco":
      return (
        <svg viewBox="0 0 170 42" role="img" aria-label="Renteco">
          <rect x="8" y="11" width="29" height="20" rx="2" />
          <text x="46" y="28">RENTECO</text>
        </svg>
      );
    case "faber":
      return (
        <svg viewBox="0 0 170 42" role="img" aria-label="Faber Castell">
          <path d="M14 30l16-18 16 18" />
          <text x="54" y="27">Faber Castell</text>
        </svg>
      );
    case "poly":
      return (
        <svg viewBox="0 0 155 42" role="img" aria-label="Poly Ugarte">
          <rect x="10" y="9" width="132" height="25" rx="2" />
          <text x="22" y="27">Poly Ugarte</text>
        </svg>
      );
    case "comsucre":
      return (
        <svg viewBox="0 0 170 42" role="img" aria-label="Comsucre">
          <path d="M16 13h18v18H16zM38 13h18v18H38z" />
          <text x="65" y="28">COMSUCRE</text>
        </svg>
      );
    case "umet":
      return (
        <svg viewBox="0 0 140 42" role="img" aria-label="UMET">
          <text x="7" y="31">UMET</text>
          <text x="10" y="39" className={styles.logoSubline}>Universidad</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 150 42" role="img" aria-label="Food Garden">
          <path d="M74 7l8 16 18 3-13 12 3 17-16-8-16 8 3-17-13-12 18-3 8-16Z" />
          <text x="18" y="34">FOOD GARDEN</text>
        </svg>
      );
  }
}

export function DestileriaHomeReplica({ images = [] }: DestileriaHomeReplicaProps) {
  const poster = images[0];
  const featuredSlides = [
    {
      client: "La Ganga",
      title: "Preview San Valentin",
      count: "1 of 6",
      poster,
      video: "/videos/web-design/destileria/preview-san-valentin.mp4",
    },
    {
      client: "Motorscorp",
      title: "La Mama de las Chaquetas",
      count: "2 of 6",
      poster,
    },
    {
      client: "Maxell",
      title: "Distracted",
      count: "3 of 6",
      poster,
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
        <div className={styles.featuredTrack}>
          {featuredSlides.map((slide) => (
            <article className={styles.featuredSlide} key={slide.title}>
              <div className={styles.featuredCopy}>
                <small>Cliente {slide.client}</small>
                <h1>{slide.title}</h1>
                <a>Ver mas</a>
              </div>
              <div className={styles.videoFrame}>
                {slide.video ? (
                  <video poster={slide.poster} muted autoPlay loop playsInline preload="metadata">
                    <source src={slide.video} type="video/mp4" />
                  </video>
                ) : slide.poster ? (
                  <img src={slide.poster} alt="" />
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
        {clientLogos.map((brand) => (
          <span key={brand} className={styles.clientLogo}>
            <ClientLogo name={brand} />
          </span>
        ))}
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
          {works.map(([client, title], index) => (
            <article key={title} className={styles.workCard}>
              {poster ? <img src={poster} alt="" loading="lazy" /> : <span className={styles.cardFallback}>{title}</span>}
              <small>Cliente {client}</small>
              <h3>{title}</h3>
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
          {academy.map((title, index) => (
            <article key={title}>
              {poster ? <img src={poster} alt="" loading="lazy" /> : <span className={styles.cardFallback}>Intensivos</span>}
              <small>Intensivos</small>
              <h3>{title}</h3>
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
          {shots.map((title) => (
            <article key={title}>
              {poster ? <img src={poster} alt="" loading="lazy" /> : <span className={styles.cardFallback}>Prensa</span>}
              <small>Prensa</small>
              <h3>{title}</h3>
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
