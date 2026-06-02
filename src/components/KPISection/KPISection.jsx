import { LayoutDashboard, KanbanSquare, LineChart, FileBarChart } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './KPISection.module.css';

const features = [
  { icon: LayoutDashboard, title: 'Diseño de indicadores', desc: 'Definimos KPIs SMART alineados con los objetivos estratégicos de tu organización.' },
  { icon: KanbanSquare, title: 'Implementación de tableros', desc: 'Creamos dashboards visuales e interactivos para monitorear el desempeño en tiempo real.' },
  { icon: LineChart, title: 'Análisis de desempeño', desc: 'Realizamos análisis periódicos con reportes detallados y recomendaciones accionables.' },
  { icon: FileBarChart, title: 'Informes gerenciales', desc: 'Generamos informes ejecutivos con insights clave para la toma de decisiones estratégicas.' },
];

const quotes = [
  'Los dashboards permiten visualizar el desempeño en tiempo real, mejoran la comunicación y facilitan la toma de decisiones',
  'Un tablero bien diseñado ahorra tiempo y reduce el riesgo de error, agilizando análisis y toma de decisiones',
  'Los KPIs SMART promueven claridad, alineación organizacional y resultados sostenibles, y son fundamentales para la mejora continua',
];

export default function KPISection() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>MONITOREO DE KPIs CORPORATIVOS</SectionLabel>
          <h2 className={styles.title}>Transformamos datos en decisiones estratégicas</h2>
        </div>

        <div ref={ref} className={`${styles.grid} reveal`}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className={styles.card}>
                <Icon size={28} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.quotesGrid}>
          {quotes.map((q, i) => (
            <div key={i} className={styles.quoteCard}>
              <p className={styles.quoteText}>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
