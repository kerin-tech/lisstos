import { Users, GraduationCap, BarChart3, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: Users,
    title: 'Gestión del Talento Humano',
    description: 'Optimizamos tu estructura organizacional mediante manuales de funciones, perfilamiento por competencias, procesos de selección técnica y evaluación del desempeño.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitaciones Empresariales',
    description: 'Desarrollamos programas formativos a la medida en SST, normativas ISO, liderazgo, cultura organizacional y prevención de riesgos.',
  },
  {
    icon: BarChart3,
    title: 'Monitoreo de KPIs',
    description: 'Diseñamos sistemas de indicadores clave e implementamos dashboards dinámicos para que tu empresa tome decisiones basadas en datos reales.',
  },
  {
    icon: ShieldCheck,
    title: 'Sistemas de Gestión HSEQ',
    description: 'Diseñamos, implementamos y administramos Sistemas de Gestión en SST adaptados a las necesidades reales de tu empresa bajo Decreto 1072/2015.',
  },
  {
    icon: Award,
    title: 'Certificaciones ISO',
    description: 'Acompañamos a tu empresa desde el diseño documental hasta la certificación oficial en estándares internacionales ISO 9001, ISO 14001 e ISO 45001.',
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>NUESTROS SERVICIOS</SectionLabel>
          <h2 className={styles.title}>Soluciones que responden a los retos reales de tu empresa</h2>
          <p className={styles.subtitle}>
            En LISSTOS HSEQ S.A.S. diseñamos, ejecutamos y acompañamos soluciones personalizadas adaptadas al entorno empresarial colombiano.
          </p>
        </div>

        <div ref={ref} className={styles.grid}>
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${styles.card} reveal`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={styles.iconCircle}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <a href="#contact" className={styles.cardLink}>
                  Más información <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
