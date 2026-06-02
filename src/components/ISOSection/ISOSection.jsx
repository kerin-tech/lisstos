import { Award, Leaf, Shield } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './ISOSection.module.css';

const isoData = [
  {
    borderColor: 'var(--color-primary)',
    icon: Award,
    number: 'ISO 9001',
    desc: 'Garantiza la satisfacción del cliente mediante procesos eficientes y de mejora continua.',
    link: 'https://www.iso.org/es/contents/data/standard/06/20/62085.html',
  },
  {
    borderColor: 'var(--color-accent)',
    icon: Leaf,
    number: 'ISO 14001',
    desc: 'Reduce impactos ambientales, ahorra recursos y asegura el cumplimiento de la normativa ambiental.',
    link: 'https://www.iso.org/es/norma/14001',
  },
  {
    borderColor: '#0E2841',
    icon: Shield,
    number: 'ISO 45001',
    desc: 'Controla riesgos laborales e impulsa el bienestar integral del personal.',
    link: 'https://www.iso.org/es/contents/data/standard/06/37/63787.html',
  },
];

export default function ISOSection() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>CERTIFICACIONES INTERNACIONALES</SectionLabel>
          <h2 className={styles.title}>Llevamos tu empresa al estándar internacional</h2>
          <p className={styles.subtitle}>
            Al integrar los tres sistemas bajo el modelo HLS y el ciclo PHVA, optimizamos recursos, facilitamos auditorías y reforzamos tu competitividad.
          </p>
        </div>

        <div ref={ref} className={`${styles.grid} reveal`}>
          {isoData.map((iso, i) => {
            const Icon = iso.icon;
            return (
              <div key={i} className={styles.card} style={{ borderTopColor: iso.borderColor }}>
                <Icon size={36} className={styles.cardIcon} />
                <span className={styles.cardNumber}>{iso.number}</span>
                <p className={styles.cardDesc}>{iso.desc}</p>
                <a href={iso.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  Ver norma en ISO.org →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
