import type { CSSProperties } from "react";
import styles from "./webHomeReplica.module.scss";

interface WebDesignProject {
  slug: string;
  title: string;
  domain: string;
  status: string;
  sector: string;
  variant: string;
  accent: string;
  nav?: string[];
  heroTitle: string;
  cta: string;
  finding: string;
  description: string;
  highlight: string;
}

interface WebHomeReplicaProps {
  project: WebDesignProject;
  images?: string[];
}

export function WebHomeReplica({ project, images = [] }: WebHomeReplicaProps) {
  const heroImage = images[0];
  const navItems = (project.nav ?? []).slice(0, 5);

  return (
    <article
      className={styles.replica}
      data-replica-root={project.slug}
      data-variant={project.variant}
      style={{ "--accent": project.accent } as CSSProperties}
    >
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>{project.title}</span>
          <small>{project.domain}</small>
        </div>
        {navItems.length > 0 && (
          <nav className={styles.nav} aria-label={`Home replicado de ${project.title}`}>
            {navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
        )}
        <span className={styles.headerAction}>{project.cta}</span>
      </header>

      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.copy}>
            <p>{project.sector}</p>
            <h1>{project.heroTitle}</h1>
            <span>{project.finding}</span>
            <div className={styles.actions}>
              <strong>{project.cta}</strong>
              <em>{project.status}</em>
            </div>
          </div>

          <div className={styles.media}>
            {heroImage ? <img src={heroImage} alt="" /> : <span>{project.title}</span>}
          </div>
        </section>

        <section className={styles.summary} aria-label={`Resumen visual de ${project.title}`}>
          <article>
            <small>Home</small>
            <strong>{project.highlight}</strong>
          </article>
          <article>
            <small>Direccion</small>
            <strong>{project.description}</strong>
          </article>
          <article>
            <small>Replica</small>
            <strong>Base preparada para copiar el home exacto desde captura o PDF.</strong>
          </article>
        </section>
      </main>
    </article>
  );
}
