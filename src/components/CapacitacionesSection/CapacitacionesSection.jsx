import { useState } from 'react';
import { HardHat, BookOpen, Lightbulb, AlertTriangle, Flame, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './CapacitacionesSection.module.css';

const programas = [
  { num: '01', icon: HardHat, title: 'Seguridad y Salud en el Trabajo', desc: 'Prevención de riesgos, uso de EPP, primeros auxilios y manejo de emergencias.' },
  { num: '02', icon: BookOpen, title: 'Formación en Normativas ISO', desc: 'Fundamentos operativos de ISO para que tu personal comprenda, aplique y mantenga estos sistemas.' },
  { num: '03', icon: Lightbulb, title: 'Talleres de Cultura Organizacional', desc: 'Dinámicas enfocadas en clima, motivación, comunicación asertiva y cohesión de equipos.' },
  { num: '04', icon: AlertTriangle, title: 'Sensibilización en Riesgos', desc: 'Sesiones interactivas sobre estrés laboral, conducción segura y manejo de sustancias.' },
  { num: '05', icon: Flame, title: 'Brigadas de Emergencia', desc: 'Formación práctica para actuar eficazmente en emergencias laborales.' },
];

export default function CapacitacionesSection() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>CAPACITACIONES EMPRESARIALES</SectionLabel>
          <h2 className={styles.title}>Capacitar es empoderar</h2>
          <p className={styles.subtitle}>
            Diseñamos y ejecutamos programas formativos que combinan teoría, normativa y práctica, generando cambios de comportamiento y fortaleciendo capacidades en tu equipo.
          </p>
        </div>

        <div ref={ref} className={`${styles.list} reveal`}>
          {programas.map((p, i) => {
            const Icon = p.icon;
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenIndex(isOpen ? null : i); }}
                aria-expanded={isOpen}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.itemNum}>{p.num}</span>
                  <Icon size={20} className={styles.itemIcon} />
                  <span className={styles.itemTitle}>{p.title}</span>
                  <span className={styles.itemToggle}>{isOpen ? '−' : '+'}</span>
                </div>
                <div className={styles.itemContent}>
                  <p className={styles.itemDesc}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.banner}>
          <Sparkles size={24} className={styles.bannerIcon} />
          <p className={styles.bannerText}>
            Nuestro enfoque es pedagógico, experiencial y personalizado, usando metodologías vivenciales, aprendizaje colaborativo y casos reales. Cada capacitación incluye evaluación de satisfacción, medición de impacto y seguimiento post-capacitación.
          </p>
        </div>
      </div>
    </section>
  );
}
