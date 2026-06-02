import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Blog.module.css';

const articles = [
  {
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    tag: 'Salud Mental · SST',
    title: 'Cuando el estrés se convirtió en accidente laboral',
    excerpt: 'Una historia real que llevó a una multinacional a replantear su política de bienestar tras reconocer el impacto del agotamiento emocional como riesgo laboral...',
  },
  {
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80',
    tag: 'Cultura Organizacional · Sostenibilidad',
    title: 'Cultura disruptiva como motor de la sostenibilidad',
    excerpt: 'Así fue como Celsia transformó su estrategia empresarial apostando por la sostenibilidad, la energía limpia y una cultura organizacional disruptiva...',
  },
];

export default function Blog() {
  const ref = useScrollReveal();

  return (
    <section id="blog" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>BLOG INSTITUCIONAL</SectionLabel>
          <h2 className={styles.title}>Aprende con LISSTOS</h2>
          <p className={styles.subtitle}>Contenido especializado en SST, gestión empresarial y sostenibilidad organizacional.</p>
        </div>

        <div ref={ref} className={`${styles.grid} reveal`}>
          {articles.map((a, i) => (
            <article key={i} className={styles.card}>
              <img src={a.img} alt="" className={styles.cardImg} />
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{a.tag}</span>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardExcerpt}>{a.excerpt}</p>
                <a href="#" className={styles.cardLink}>
                  Leer artículo <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
