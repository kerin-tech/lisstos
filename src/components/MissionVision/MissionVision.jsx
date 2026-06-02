import { Target, Eye, Star, Shield, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './MissionVision.module.css';

const values = [
  { icon: Star, label: 'EXCELENCIA' },
  { icon: Shield, label: 'COMPROMISO' },
  { icon: Zap, label: 'INNOVACIÓN' },
  { icon: Heart, label: 'INTEGRIDAD' },
  { icon: Target, label: 'COLABORACIÓN' },
];

const policyItems = [
  'Cumplir con los requisitos legales y reglamentarios aplicables en SST',
  'Identificar, evaluar y controlar los riesgos laborales de manera continua',
  'Promover la participación activa de todos los trabajadores en el SG-SST',
  'Mejorar continuamente la eficacia del sistema de gestión',
];

export default function MissionVision() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.purpose}>
          <h2 className={styles.purposeTitle}>Comprometidos con el bienestar laboral, impulsando la eficiencia empresarial</h2>
        </div>

        <div ref={ref1} className={`${styles.mvGrid} reveal`}>
          <div className={styles.mvCard}>
            <Target size={36} className={styles.mvIcon} />
            <h3 className={styles.mvTitle}>Misión</h3>
            <p className={styles.mvText}>
              Somos su aliado estratégico en seguridad y salud en el trabajo; diseñamos, implementamos y administramos servicios integrales HSEQ y Gestión del Talento Humano, orientados a proteger la vida, promover el bienestar laboral y optimizar el desempeño de las organizaciones en Colombia.
            </p>
          </div>
          <div className={styles.mvCard}>
            <Eye size={36} className={styles.mvIcon} />
            <h3 className={styles.mvTitle}>Visión</h3>
            <p className={styles.mvText}>
              Ser reconocidos en el mercado nacional como la consultora líder en HSEQ y Gestión del Talento Humano, destacándonos por nuestra capacidad de innovación, nuestro compromiso con los resultados de nuestros clientes y nuestra contribución al desarrollo de una cultura de prevención en Colombia.
            </p>
          </div>
        </div>

        <div ref={ref2} className={`${styles.valuesRow} reveal`}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className={styles.valueCard}>
                <Icon size={28} className={styles.valueIcon} />
                <span className={styles.valueLabel}>{v.label}</span>
              </div>
            );
          })}
        </div>

        <div ref={ref3} className={`${styles.policyBlock} reveal`}>
          <h3 className={styles.policyTitle}>Política de calidad</h3>
          <ul className={styles.policyList}>
            {policyItems.map((item, i) => (
              <li key={i} className={styles.policyItem}>
                <CheckCircle2 size={20} className={styles.policyIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
