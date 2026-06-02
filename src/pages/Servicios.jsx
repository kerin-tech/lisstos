import { Users, GraduationCap, BarChart3, ShieldCheck, Award, FileText, Target, UserPlus, TrendingUp, LayoutDashboard, KanbanSquare, LineChart, FileBarChart, ClipboardCheck, FileSearch, Shield, RefreshCw, HardHat, BookOpen, Lightbulb, AlertTriangle, Flame, Sparkles, ArrowRight, Leaf, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/ui/SectionLabel';
import styles from './Servicios.module.css';

const serviciosFull = [
  {
    id: 'talento',
    icon: Users,
    title: 'Talento Humano',
    subtitle: 'Gestión del Talento Humano',
    desc: 'Optimizamos tu estructura organizacional a través de manuales de funciones, perfilamiento por competencias, procesos de selección técnica y evaluación del desempeño.',
    subs: [
      { icon: FileText, title: 'Manuales de Funciones', desc: 'Documentación clara de roles, responsabilidades y perfiles para cada posición organizacional.' },
      { icon: Target, title: 'Perfilamiento por competencias', desc: 'Identificamos habilidades y comportamientos clave requeridos en cada rol.' },
      { icon: UserPlus, title: 'Selección Técnica', desc: 'Procesos de reclutamiento basados en perfiles por competencias específicas.' },
      { icon: TrendingUp, title: 'Evaluación del Desempeño', desc: 'Sistemas de evaluación 360° para medir y mejorar el rendimiento.' },
    ],
  },
  {
    id: 'capacitaciones',
    icon: GraduationCap,
    title: 'Capacitaciones',
    subtitle: 'Capacitaciones Empresariales',
    desc: 'Desarrollamos procesos formativos a la medida en temas como Seguridad y Salud en el Trabajo, normativas ISO, liderazgo, cultura organizacional y prevención de riesgos.',
    subs: [
      { icon: HardHat, title: 'SST y Normativas', desc: 'Formación especializada en Seguridad y Salud en el Trabajo conforme a la legislación colombiana.' },
      { icon: BookOpen, title: 'Liderazgo y Cultura', desc: 'Programas de liderazgo transformacional y fortalecimiento de la cultura organizacional.' },
      { icon: Lightbulb, title: 'Prevención de Riesgos', desc: 'Talleres prácticos para identificar, evaluar y controlar riesgos laborales.' },
      { icon: Flame, title: 'Brigadas de Emergencia', desc: 'Formación práctica para actuar eficazmente en emergencias laborales.' },
    ],
  },
  {
    id: 'kpis',
    icon: BarChart3,
    title: 'Monitoreo KPIs',
    subtitle: 'Monitoreo de KPIs',
    desc: 'Diseñamos sistemas de indicadores clave para que tu empresa tome decisiones con base en datos reales. Implementamos dashboards visuales, informes gerenciales y estrategias de mejora continua.',
    subs: [
      { icon: LayoutDashboard, title: 'Dashboards Visuales', desc: 'Tableros de control en tiempo real para visualizar el estado de tus indicadores.' },
      { icon: KanbanSquare, title: 'Implementación de tableros', desc: 'Creamos dashboards interactivos para monitorear el desempeño.' },
      { icon: LineChart, title: 'Análisis de desempeño', desc: 'Análisis periódicos con reportes detallados y recomendaciones accionables.' },
      { icon: FileBarChart, title: 'Informes Gerenciales', desc: 'Reportes ejecutivos con insights clave para la toma de decisiones.' },
    ],
  },
  {
    id: 'sgsst',
    icon: ShieldCheck,
    title: 'Sistemas HSEQ',
    subtitle: 'Sistemas de Gestión HSEQ',
    desc: 'Diseñamos, implementamos y administramos Sistemas de Gestión en Seguridad y Salud en el Trabajo adaptados a las necesidades reales de tu empresa, cumpliendo toda la normatividad colombiana vigente.',
    subs: [
      { icon: ClipboardCheck, title: 'Diseño del SG-SST', desc: 'Creación del sistema desde cero, adaptado al tamaño y sector de tu empresa.' },
      { icon: FileSearch, title: 'Implementación', desc: 'Ejecución completa del sistema con capacitación a todo el personal.' },
      { icon: Shield, title: 'Administración Continua', desc: 'Seguimiento, actualización y auditorías internas para mantener el sistema vigente.' },
      { icon: RefreshCw, title: 'Mejora Continua', desc: 'Estrategias basadas en datos para optimizar procesos.' },
    ],
  },
  {
    id: 'iso',
    icon: Award,
    title: 'Certificaciones ISO',
    subtitle: 'Certificaciones Internacionales',
    desc: 'Lleva tu empresa al siguiente nivel con la implementación de Normas Internacionales. Te acompañamos desde el diseño documental hasta la certificación oficial con los principales entes certificadores.',
    subs: [
      { icon: FileText, title: 'Diseño Documental', desc: 'Creación de toda la documentación requerida por la norma ISO específica.' },
      { icon: Target, title: 'Auditoría Pre-Certificación', desc: 'Revisión completa del sistema antes de la auditoría oficial.' },
      { icon: Award, title: 'Certificación Oficial', desc: 'Acompañamiento integral hasta obtener la certificación con entes acreditados.' },
      { icon: Leaf, title: 'ISO 14001', desc: 'Gestión ambiental para reducir impactos y asegurar cumplimiento normativo.' },
    ],
  },
];

export default function Servicios() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>NUESTROS SERVICIOS</SectionLabel>
          <h1 className={styles.title}>Soluciones a medida con la experiencia de LISSTOS</h1>
          <p className={styles.subtitle}>
            En LISSTOS HSEQ S.A.S., entendemos que cada empresa es única. Diseñamos, ejecutamos y acompañamos soluciones personalizadas que responden a los retos reales del entorno empresarial colombiano.
          </p>
        </div>

        <div ref={ref} className={styles.servicesList}>
          {serviciosFull.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} id={svc.id} className={styles.serviceBlock}>
                <div className={styles.svcIntro}>
                  <div className={styles.svcIntroContent}>
                    <span className={styles.svcTag}>{svc.title}</span>
                    <h2 className={styles.svcSubtitle}>{svc.subtitle}</h2>
                    <p className={styles.svcDesc}>{svc.desc}</p>
                    <Link to="/#contact" className={styles.svcLink}>
                      Solicitar información <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={styles.svcIconWrap}>
                    <Icon size={48} className={styles.svcBigIcon} />
                  </div>
                </div>
                <div className={styles.subGrid}>
                  {svc.subs.map((sub, j) => {
                    const SubIcon = sub.icon;
                    return (
                      <div key={j} className={styles.subCard}>
                        <SubIcon size={22} className={styles.subIcon} />
                        <h3 className={styles.subTitle}>{sub.title}</h3>
                        <p className={styles.subDesc}>{sub.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
