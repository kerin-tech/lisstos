import { useState } from 'react';
import { Users, GraduationCap, BarChart3, ShieldCheck, Award, FileText, Target, UserPlus, TrendingUp, LayoutDashboard, KanbanSquare, LineChart, FileBarChart, ClipboardCheck, FileSearch, Shield, RefreshCw, HardHat, BookOpen, Lightbulb, AlertTriangle, Flame, Sparkles, ArrowRight, Leaf, Zap, CheckCircle2, MessageCircle } from 'lucide-react';
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
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
    subs: [
      { icon: FileText, title: 'Manuales de Funciones', desc: 'Documentación clara de roles, responsabilidades y perfiles para cada posición.' },
      { icon: Target, title: 'Perfilamiento', desc: 'Identificamos habilidades y comportamientos clave requeridos en cada rol.' },
      { icon: UserPlus, title: 'Selección Técnica', desc: 'Reclutamiento basado en perfiles por competencias específicas.' },
      { icon: TrendingUp, title: 'Evaluación 360°', desc: 'Sistemas para medir y mejorar el rendimiento de tu equipo.' },
    ],
  },
  {
    id: 'capacitaciones',
    icon: GraduationCap,
    title: 'Capacitaciones',
    subtitle: 'Capacitaciones Empresariales',
    desc: 'Desarrollamos procesos formativos a la medida en SST, normativas ISO, liderazgo, cultura organizacional y prevención de riesgos.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    subs: [
      { icon: HardHat, title: 'SST y Normativas', desc: 'Formación especializada en SST conforme a legislación colombiana.' },
      { icon: BookOpen, title: 'Liderazgo', desc: 'Programas de liderazgo transformacional y cultura organizacional.' },
      { icon: Lightbulb, title: 'Prevención', desc: 'Talleres prácticos para identificar y controlar riesgos laborales.' },
      { icon: Flame, title: 'Brigadas', desc: 'Formación práctica para emergencias laborales.' },
    ],
  },
  {
    id: 'kpis',
    icon: BarChart3,
    title: 'Monitoreo KPIs',
    subtitle: 'Monitoreo de KPIs',
    desc: 'Diseñamos sistemas de indicadores clave para decisiones basadas en datos reales. Implementamos dashboards, informes y estrategias de mejora continua.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    subs: [
      { icon: LayoutDashboard, title: 'Dashboards', desc: 'Tableros de control en tiempo real para tus indicadores.' },
      { icon: KanbanSquare, title: 'Implementación', desc: 'Creamos dashboards interactivos de desempeño.' },
      { icon: LineChart, title: 'Análisis', desc: 'Reportes detallados con recomendaciones accionables.' },
      { icon: FileBarChart, title: 'Informes', desc: 'Reportes ejecutivos con insights clave.' },
    ],
  },
  {
    id: 'sgsst',
    icon: ShieldCheck,
    title: 'Sistemas HSEQ',
    subtitle: 'Sistemas de Gestión HSEQ',
    desc: 'Diseñamos, implementamos y administramos SG-SST adaptados a las necesidades de tu empresa, cumpliendo toda la normatividad colombiana vigente.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80',
    subs: [
      { icon: ClipboardCheck, title: 'Diseño SG-SST', desc: 'Creación del sistema desde cero para tu empresa.' },
      { icon: FileSearch, title: 'Implementación', desc: 'Ejecución completa con capacitación al personal.' },
      { icon: Shield, title: 'Administración', desc: 'Seguimiento y auditorías internas continuas.' },
      { icon: RefreshCw, title: 'Mejora Continua', desc: 'Estrategias basadas en datos para optimizar procesos.' },
    ],
  },
  {
    id: 'iso',
    icon: Award,
    title: 'Certificaciones ISO',
    subtitle: 'Certificaciones Internacionales',
    desc: 'Te acompañamos desde el diseño documental hasta la certificación oficial en ISO 9001, ISO 14001 e ISO 45001.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80',
    subs: [
      { icon: FileText, title: 'Diseño Documental', desc: 'Creación de documentación requerida por la norma.' },
      { icon: Target, title: 'Pre-Auditoría', desc: 'Revisión completa antes de la auditoría oficial.' },
      { icon: Award, title: 'Certificación', desc: 'Acompañamiento hasta obtener la certificación.' },
      { icon: Leaf, title: 'ISO 14001', desc: 'Gestión ambiental para reducir impactos.' },
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
                    <h2 className={styles.svcTitle}>{svc.subtitle}</h2>
                    <p className={styles.svcDesc}>{svc.desc}</p>
                    <Link to="/#contact" className={styles.svcLink}>
                      Solicitar información <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={styles.svcImgWrap}>
                    <img src={svc.img} alt={svc.subtitle} className={styles.svcImg} />
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

      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>¿Necesitas una solución específica?</h2>
            <p className={styles.ctaSub}>Déjanos tus datos y te contactamos en las próximas 24 horas.</p>
            <Link to="/#contact" className={styles.ctaBtn}>
              <MessageCircle size={18} /> Solicitar cotización
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
