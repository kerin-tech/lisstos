import { FileText, Target, UserPlus, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './TalentSection.module.css';

const subServices = [
  { icon: FileText, title: 'Manuales de funciones', desc: 'Creamos documentos claros y funcionales que definen tareas, responsabilidades, relaciones de jerarquía y requisitos del cargo.' },
  { icon: Target, title: 'Perfilamiento por competencias', desc: 'Identificamos y documentamos los conocimientos, habilidades, actitudes y comportamientos clave requeridos en cada rol.' },
  { icon: UserPlus, title: 'Acompañamiento en selección', desc: 'Acompañamiento en la armonización de los procesos y el ingreso de personal según las necesidades de la empresa.' },
  { icon: TrendingUp, title: 'Evaluación de desempeño', desc: 'Aplicamos modelos como evaluación 360°, encuestas de clima laboral y reportes analíticos para medir desempeño.' },
];

const benefits = [
  'Mejores decisiones de contratación y promoción',
  'Mayor retención del talento estratégico',
  'Ambientes laborales saludables y colaborativos',
  'Claridad en roles y expectativas para todo el equipo',
  'Incremento del desempeño individual y organizacional',
];

export default function TalentSection() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>GESTIÓN DEL TALENTO</SectionLabel>
          <h2 className={styles.title}>El verdadero crecimiento empresarial comienza con las personas</h2>
          <p className={styles.intro}>
            En LISSTOS optimizamos la gestión del talento humano de tu empresa con procesos estructurados que mejoran la productividad y el clima organizacional.
          </p>
        </div>

        <div ref={ref} className={`${styles.grid} reveal`}>
          {subServices.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={styles.gridItem}>
                <Icon size={24} className={styles.gridIcon} />
                <h3 className={styles.gridTitle}>{item.title}</h3>
                <p className={styles.gridDesc}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.benefitsBlock}>
          <h3 className={styles.benefitsTitle}>Beneficios para tu empresa</h3>
          <ul className={styles.benefitsList}>
            {benefits.map((b, i) => (
              <li key={i} className={styles.benefitItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
