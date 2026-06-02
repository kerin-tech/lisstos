import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Hero.module.css';

const trustPills = [
  'Presencia Nacional',
  'Asesoría personalizada',
  'Resultados medibles',
  'Soluciones prácticas',
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <div className={styles.badge}>Seguridad · Salud · Gestión Empresarial</div>
          <h1 className={styles.title}>
            Seguridad que <span className={styles.italic}>inspira</span>,
            <br />
            calidad que transforma
          </h1>
          <p className={styles.subtitle}>
            En LISSTOS HSEQ S.A.S. diseñamos, implementamos y acompañamos sistemas que transforman entornos laborales. Somos tu aliado estratégico para lograr espacios seguros, sostenibles y productivos.
          </p>
          <div className={styles.actions}>
            <Button href="#services" variant="primary">
              Conoce nuestros servicios <ArrowRight size={18} />
            </Button>
            <Button href="#contact" variant="outline">
              <MessageCircle size={18} /> Solicitar diagnóstico
            </Button>
          </div>
          <div className={styles.trustRow}>
            {trustPills.map((pill) => (
              <span key={pill} className={styles.trustPill}>✓ {pill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
