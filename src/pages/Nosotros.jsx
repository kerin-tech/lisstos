import { Target, Eye, Star, Shield, Zap, Heart, CheckCircle2, Download } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/ui/SectionLabel';
import styles from './Nosotros.module.css';

const valores = [
  { icon: Star, label: 'Excelencia' },
  { icon: Shield, label: 'Compromiso' },
  { icon: Zap, label: 'Innovación' },
  { icon: Heart, label: 'Integridad' },
  { icon: Target, label: 'Colaboración' },
];

const policyItems = [
  'Cumplir con los requisitos legales y reglamentarios aplicables en SST',
  'Identificar, evaluar y controlar los riesgos laborales de manera continua',
  'Promover la participación activa de todos los trabajadores en el SG-SST',
  'Mejorar continuamente la eficacia del sistema de gestión',
];

export default function Nosotros() {
  const refMV = useScrollReveal();
  const refVal = useScrollReveal();
  const refPol = useScrollReveal();

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>SOBRE NOSOTROS</SectionLabel>
          <h1 className={styles.title}>Comprometidos con el bienestar laboral</h1>
          <p className={styles.subtitle}>
            LISSTOS HSEQ S.A.S. nació en Palmira, corazón empresarial del Valle del Cauca, con una visión clara: impulsar el crecimiento de las organizaciones a través de soluciones en Seguridad, Salud Ocupacional y Gestión Empresarial que generen bienestar real y vínculos de confianza.
          </p>
        </div>

        <div ref={refMV} className={`${styles.mvGrid} reveal`}>
          <div className={styles.mvCard}>
            <Target size={32} className={styles.mvIcon} />
            <h2 className={styles.mvTitle}>Misión</h2>
            <p className={styles.mvText}>
              Somos su aliado estratégico en seguridad y salud en el trabajo; diseñamos, implementamos y administramos servicios integrales HSEQ y Gestión del Talento Humano, orientados a proteger la vida, promover el bienestar laboral y optimizar el desempeño de las organizaciones en Colombia.
            </p>
          </div>
          <div className={styles.mvCard}>
            <Eye size={32} className={styles.mvIcon} />
            <h2 className={styles.mvTitle}>Visión</h2>
            <p className={styles.mvText}>
              Ser reconocidos en el mercado nacional como la consultora líder en HSEQ y Gestión del Talento Humano, destacándonos por nuestra capacidad de innovación, nuestro compromiso con los resultados de nuestros clientes y nuestra contribución al desarrollo de una cultura de prevención en Colombia.
            </p>
          </div>
        </div>

        <div className={styles.valSection}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div ref={refVal} className={`${styles.valGrid} reveal`}>
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={styles.valCard}>
                  <Icon size={32} className={styles.valIcon} />
                  <span className={styles.valLabel}>{v.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={refPol} className={`${styles.policyBlock} reveal`}>
          <div className={styles.policyContent}>
            <h2 className={styles.policyTitle}>Política de Calidad</h2>
            <p className={styles.policyText}>
              En LISSTOS HSEQ S.A.S., nos dedicamos al diseño, implementación y administración de Sistemas de Gestión de Seguridad y Salud en el Trabajo. Prestamos servicios innovadores y de alta calidad que contribuyen activamente al bienestar de los trabajadores y a la construcción de ambientes laborales seguros y productivos.
            </p>
            <ul className={styles.policyList}>
              {policyItems.map((item, i) => (
                <li key={i} className={styles.policyItem}>
                  <CheckCircle2 size={18} className={styles.policyIcon} />
                  {item}
                </li>
              ))}
            </ul>
            <button className={styles.downloadBtn}>
              <Download size={16} /> Descargar política completa
            </button>
          </div>
          <div className={styles.policyStats}>
            <div className={styles.policyStat}>
              <span className={styles.policyStatValue}>98%</span>
              <span className={styles.policyStatLabel}>Satisfacción del cliente</span>
            </div>
            <div className={styles.policyStat}>
              <span className={styles.policyStatValue}>100%</span>
              <span className={styles.policyStatLabel}>Cumplimiento legal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
