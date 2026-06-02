import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './About.module.css';

const tags = ['Pequeñas', 'Medianas', 'Grandes'];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80"
              alt="Equipo profesional en reunión"
              className={styles.image}
            />
            <div className={styles.accentBox} />
          </div>
        </div>
        <div ref={ref} className={`${styles.content} reveal`}>
          <SectionLabel>SOMOS LISSTOS</SectionLabel>
          <h2 className={styles.title}>
            Nacimos para transformar entornos laborales en Colombia
          </h2>
          <p className={styles.paragraph}>
            LISSTOS HSEQ S.A.S. nació en Palmira, corazón empresarial del Valle del Cauca, con una visión clara: impulsar el crecimiento de las organizaciones a través de soluciones en Seguridad, Salud Ocupacional y Gestión Empresarial que generen bienestar real.
          </p>
          <p className={styles.paragraph}>
            Contamos con un equipo multidisciplinario que entiende los desafíos reales del entorno empresarial colombiano.
          </p>
          <div className={styles.tagRow}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <blockquote className={styles.quote}>
            "Porque estar listos no es solo cumplir con la ley, es anticiparse, adaptarse y crecer con responsabilidad."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
