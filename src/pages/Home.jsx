import { useState } from 'react';
import { ArrowRight, ChevronDown, Target, Star, Shield, Zap, Heart, Users, GraduationCap, BarChart3, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';
import styles from './Home.module.css';

const servicios = [
  { icon: Users, title: 'Talento Humano' },
  { icon: GraduationCap, title: 'Capacitaciones' },
  { icon: BarChart3, title: 'Monitoreo KPIs' },
  { icon: Shield, title: 'Sistemas HSEQ' },
  { icon: Award, title: 'Certificaciones ISO' },
];

const valores = [
  { icon: Star, label: 'Excelencia' },
  { icon: Shield, label: 'Compromiso' },
  { icon: Zap, label: 'Innovación' },
  { icon: Heart, label: 'Integridad' },
  { icon: Target, label: 'Colaboración' },
];

export default function Home() {
  const refAbout = useScrollReveal();
  const refServ = useScrollReveal();
  const refVal = useScrollReveal();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.content}>
            <div className={styles.badge}>Seguridad · Salud · Gestión Empresarial</div>
            <h1 className={styles.title}>
              Seguridad que inspira,<br />calidad que transforma
            </h1>
            <p className={styles.subtitle}>
              En LISSTOS HSEQ S.A.S. diseñamos e implementamos sistemas que transforman entornos laborales en espacios seguros, sostenibles y productivos.
            </p>
            <div className={styles.actions}>
              <Button href="/servicios" variant="primary">
                Iniciar Asesoría <ArrowRight size={18} />
              </Button>
              <div className={styles.locationBadge}>
                <MapPin size={16} /> Palmira, Colombia
              </div>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>15+</span>
                <span className={styles.heroStatLabel}>Años de experiencia</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>100%</span>
                <span className={styles.heroStatLabel}>Resultados medibles</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <ChevronDown size={24} />
        </div>
      </section>

      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div ref={refAbout} className={`${styles.aboutGrid} reveal`}>
            <div className={styles.aboutContent}>
              <SectionLabel>SOMOS LISSTOS</SectionLabel>
              <h2 className={styles.aboutTitle}>
                Nacimos para transformar entornos laborales en Colombia
              </h2>
              <p className={styles.aboutText}>
                LISSTOS HSEQ S.A.S. nació en Palmira con una visión clara: impulsar el crecimiento de las organizaciones a través de soluciones en Seguridad y Gestión Empresarial que generen bienestar real y vínculos de confianza.
              </p>
              <Link to="/nosotros" className={styles.aboutLink}>
                Conoce nuestra historia <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.aboutStat}>
                <span className={styles.aboutStatValue}>22.870+</span>
                <span className={styles.aboutStatLabel}>Procesos optimizados en un año</span>
              </div>
              <div className={styles.aboutStat}>
                <span className={styles.aboutStatValue}>98%</span>
                <span className={styles.aboutStatLabel}>Índice de satisfacción</span>
              </div>
              <div className={styles.aboutStat}>
                <span className={styles.aboutStatValue}>150+</span>
                <span className={styles.aboutStatLabel}>Empresas aliadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.servSection}`}>
        <div className="container">
          <div className={styles.servHeader}>
            <SectionLabel>NUESTROS SERVICIOS</SectionLabel>
            <h2 className={styles.servTitle}>Soluciones a medida con la experiencia de LISSTOS</h2>
            <p className={styles.servSubtitle}>
              Diseñamos, ejecutamos y acompañamos soluciones personalizadas que responden a los retos reales del entorno empresarial colombiano.
            </p>
          </div>
          <div ref={refServ} className={`${styles.servGrid} reveal`}>
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link to="/servicios" key={i} className={styles.servCard}>
                  <Icon size={28} className={styles.servIcon} />
                  <h3 className={styles.servCardTitle}>{s.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.valSection}`}>
        <div className="container">
          <div className={styles.valHeader}>
            <SectionLabel>PRINCIPIOS Y VALORES</SectionLabel>
            <h2 className={styles.valTitle}>Aliados destinados a la excelencia empresarial</h2>
          </div>
          <div ref={refVal} className={`${styles.valGrid} reveal`}>
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={styles.valCard}>
                  <Icon size={28} className={styles.valIcon} />
                  <span className={styles.valLabel}>{v.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactInner}>
            <h2 className={styles.contactTitle}>¿Deseas conocer más de nuestros servicios?</h2>
            <p className={styles.contactSub}>Déjanos tus datos y nos comunicaremos contigo para ampliar la información.</p>
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
        <h3 className={styles.successTitle}>¡Gracias!</h3>
        <p className={styles.successText}>Nos comunicaremos contigo pronto.</p>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <input type="text" placeholder="Nombres *" required className={styles.formInput} />
        <input type="text" placeholder="Empresa *" required className={styles.formInput} />
      </div>
      <div className={styles.formRow}>
        <input type="email" placeholder="Correo electrónico *" required className={styles.formInput} />
        <input type="tel" placeholder="Celular *" required className={styles.formInput} />
      </div>
      <textarea placeholder="Describe tu solicitud aquí" rows={3} className={styles.formTextarea} />
      <button type="submit" className={styles.formBtn}>Enviar solicitud</button>
    </form>
  );
}

function MapPin({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
