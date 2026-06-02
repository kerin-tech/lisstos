import { useState } from 'react';
import { ArrowRight, ChevronDown, Target, Star, Shield, Zap, Heart, Users, GraduationCap, BarChart3, Award, CheckCircle2, MapPin, Quote, UserCheck, Leaf, Clock, MessageCircle, TrendingUp, Building2, Briefcase, FileText, HardHat, Eye, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/ui/SectionLabel';
import styles from './Home.module.css';

const servicios = [
  { icon: Users, title: 'Gestión del Talento Humano', desc: 'Optimizamos tu estructura organizacional con manuales de funciones, perfilamiento y selección técnica.', link: '/servicios#talento' },
  { icon: GraduationCap, title: 'Capacitaciones Empresariales', desc: 'Programas formativos en SST, normativas ISO, liderazgo y prevención de riesgos.', link: '/servicios#capacitaciones' },
  { icon: BarChart3, title: 'Monitoreo de KPIs', desc: 'Dashboards visuales e informes gerenciales para decisiones basadas en datos reales.', link: '/servicios#kpis' },
  { icon: Shield, title: 'Sistemas de Gestión HSEQ', desc: 'SG-SST bajo Decreto 1072 con diseño, implementación y administración continua.', link: '/servicios#sgsst' },
  { icon: Award, title: 'Certificaciones ISO', desc: 'Acompañamiento en ISO 9001, ISO 14001 e ISO 45001 hasta certificación oficial.', link: '/servicios#iso' },
];

const valores = [
  { icon: Star, label: 'Excelencia' },
  { icon: Shield, label: 'Compromiso' },
  { icon: Zap, label: 'Innovación' },
  { icon: Heart, label: 'Integridad' },
  { icon: Target, label: 'Colaboración' },
];

const testimonials = [
  { quote: 'LISSTOS transformó nuestra gestión en seguridad. Ahora tenemos procesos claros y un equipo comprometido con la cultura preventiva.', author: 'Carlos Mendoza', role: 'Gerente General — AgroValle S.A.' },
  { quote: 'El acompañamiento para la certificación ISO fue impecable. El equipo nos guió en cada paso del proceso.', author: 'Andrea Ruiz', role: 'Directora HSEQ — ConstruPalmira' },
  { quote: 'Las capacitaciones elevaron la conciencia de seguridad en toda nuestra operación. Resultados tangibles desde el primer mes.', author: 'David Herrera', role: 'Jefe de Operaciones — LogísticaSur' },
];

const beneficios = [
  { icon: UserCheck, title: 'Enfoque personalizado', desc: 'Soluciones diseñadas a la medida de cada organización, no plantillas genéricas.' },
  { icon: Building2, title: 'Presencia regional', desc: 'Acompañamiento presencial en 4 departamentos con cobertura nacional.' },
  { icon: TrendingUp, title: 'Resultados medibles', desc: 'Indicadores claros y reportes periódicos que demuestran el avance.' },
  { icon: Clock, title: 'Acompañamiento continuo', desc: 'Soporte permanente, no solo implementación. Estamos contigo en cada etapa.' },
];

export default function Home() {
  const refStats = useScrollReveal();
  const refAbout = useScrollReveal();
  const refServ = useScrollReveal();
  const refWhy = useScrollReveal();
  const refTest = useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Seguridad · Salud · Gestión Empresarial</div>
            <h1 className={styles.heroTitle}>
              Seguridad que inspira,<br />
              calidad que transforma
            </h1>
            <p className={styles.heroSub}>
              En LISSTOS HSEQ S.A.S. diseñamos e implementamos sistemas que transforman entornos laborales en espacios seguros, sostenibles y productivos.
            </p>
            <div className={styles.heroActions}>
              <Link to="/servicios" className={styles.btnPrimary}>
                Iniciar Asesoría <ArrowRight size={18} />
              </Link>
              <div className={styles.heroLocation}>
                <MapPin size={16} /> Palmira, Colombia
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollDown}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* STATS BAR */}
      <section className={styles.statsBar}>
        <div className="container">
          <div ref={refStats} className={`${styles.statsGrid} reveal`}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>22.870+</span>
              <span className={styles.statLabel}>Procesos optimizados en un año</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Índice de satisfacción</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>40+</span>
              <span className={styles.statLabel}>Empresas impactadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + IMAGE */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div ref={refAbout} className={`${styles.aboutGrid} reveal`}>
            <div className={styles.aboutContent}>
              <SectionLabel>SOMOS LISSTOS</SectionLabel>
              <h2 className={styles.aboutTitle}>Aliados estratégicos en seguridad y gestión empresarial</h2>
              <p className={styles.aboutText}>
                LISSTOS HSEQ S.A.S. nació en Palmira, corazón empresarial del Valle del Cauca, con una visión clara: impulsar el crecimiento de las organizaciones a través de soluciones en Seguridad, Salud Ocupacional y Gestión Empresarial que generen bienestar real y vínculos de confianza.
              </p>
              <p className={styles.aboutText}>
                Contamos con un equipo multidisciplinario que entiende los desafíos reales del entorno empresarial colombiano y diseña estrategias prácticas que producen resultados medibles.
              </p>
              <div className={styles.aboutTags}>
                <span>Pequeñas</span>
                <span>Medianas</span>
                <span>Grandes</span>
              </div>
              <Link to="/nosotros" className={styles.aboutLink}>
                Conoce nuestra historia <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.aboutImageCol}>
              <div className={styles.aboutImageWrap}>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80"
                  alt="Equipo profesional LISSTOS"
                  className={styles.aboutImage}
                />
                <div className={styles.aboutAccent} />
              </div>
              <div className={styles.aboutQuote}>
                <Quote size={20} />
                <p>"Estar listos es anticiparse, adaptarse y crecer con responsabilidad."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`section ${styles.servSection}`}>
        <div className="container">
          <div className={styles.servHeader}>
            <SectionLabel>NUESTROS SERVICIOS</SectionLabel>
            <h2 className={styles.servTitle}>Soluciones a medida para tu empresa</h2>
            <p className={styles.servSub}>Diseñamos, ejecutamos y acompañamos soluciones personalizadas que responden a los retos reales del entorno empresarial colombiano.</p>
          </div>
          <div ref={refServ} className={`${styles.servGrid} reveal`}>
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link to={s.link} key={i} className={styles.servCard}>
                  <div className={styles.servIconWrap}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.servCardTitle}>{s.title}</h3>
                  <p className={styles.servCardDesc}>{s.desc}</p>
                  <span className={styles.servCardLink}>
                    Ver más <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyHeader}>
            <SectionLabel>¿POR QUÉ ELEGIRNOS?</SectionLabel>
            <h2 className={styles.whyTitle}>Tu aliado de confianza en HSEQ</h2>
          </div>
          <div ref={refWhy} className={`${styles.whyGrid} reveal`}>
            <div className={styles.whyContent}>
              {beneficios.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className={styles.whyItem}>
                    <div className={styles.whyIconWrap}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className={styles.whyItemTitle}>{b.title}</h3>
                      <p className={styles.whyItemDesc}>{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.whyImageCol}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
                alt="Consultoría empresarial"
                className={styles.whyImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`section ${styles.testSection}`}>
        <div className="container">
          <div className={styles.testHeader}>
            <SectionLabel>TESTIMONIOS</SectionLabel>
            <h2 className={styles.testTitle}>Lo que dicen nuestros aliados</h2>
          </div>
          <div ref={refTest} className={`${styles.testGrid} reveal`}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testCard}>
                <Quote size={24} className={styles.testQuoteIcon} />
                <p className={styles.testQuote}>{t.quote}</p>
                <div className={styles.testAuthor}>
                  <div className={styles.testAvatar}>{t.author.split(' ').map(w => w[0]).join('')}</div>
                  <div>
                    <p className={styles.testName}>{t.author}</p>
                    <p className={styles.testRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <SectionLabel>CONTÁCTANOS</SectionLabel>
            <h2 className={styles.ctaTitle}>¿Listo para transformar la gestión de tu empresa?</h2>
            <p className={styles.ctaSub}>Déjanos tus datos y un asesor especializado se comunicará contigo en las próximas 24 horas.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  if (sent) {
    return (
      <div className={styles.successBlock}>
        <CheckCircle2 size={48} className={styles.successIcon} />
        <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
        <p className={styles.successText}>Nos comunicaremos contigo pronto.</p>
      </div>
    );
  }

  return (
    <form className={styles.ctaForm} onSubmit={handleSubmit}>
      <div className={styles.ctaFormRow}>
        <input type="text" placeholder="Nombres *" required className={styles.ctaInput} />
        <input type="text" placeholder="Empresa *" required className={styles.ctaInput} />
      </div>
      <div className={styles.ctaFormRow}>
        <input type="email" placeholder="Correo electrónico *" required className={styles.ctaInput} />
        <input type="tel" placeholder="Celular *" required className={styles.ctaInput} />
      </div>
      <textarea placeholder="¿Cómo podemos ayudarte?" rows={3} className={styles.ctaTextarea} />
      <button type="submit" className={styles.ctaBtn}>
        <MessageCircle size={18} /> Enviar solicitud
      </button>
      <p className={styles.ctaLegal}>Al enviar, autorizas a LISSTOS HSEQ S.A.S. a contactarte. Cumplimos la Ley 1581 de 2012.</p>
    </form>
  );
}
