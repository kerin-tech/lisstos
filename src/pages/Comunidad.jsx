import { MapPin, Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/ui/SectionLabel';
import styles from './Comunidad.module.css';

const departments = [
  { name: 'Santander', cities: 'Bucaramanga, Barrancabermeja, Piedecuesta, Girón, Málaga' },
  { name: 'Cauca', cities: 'Popayán' },
  { name: 'Nariño', cities: 'Pasto, Ipiales' },
  { name: 'Valle del Cauca', cities: 'Cali, Palmira, Jamundí, Yumbo' },
];

const testimonials = [
  {
    quote: 'LISSTOS transformó nuestra gestión en seguridad. Ahora tenemos procesos claros y un equipo comprometido con la cultura preventiva.',
    author: 'Carlos Mendoza',
    role: 'Gerente General — AgroValle S.A.',
    rating: 5,
  },
  {
    quote: 'El acompañamiento para la certificación ISO fue impecable. El equipo de LISSTOS nos guió en cada paso del proceso.',
    author: 'Andrea Ruiz',
    role: 'Directora HSEQ — ConstruPalmira',
    rating: 5,
  },
  {
    quote: 'Las capacitaciones de LISSTOS elevaron la conciencia de seguridad en toda nuestra operación. Resultados tangibles desde el primer mes.',
    author: 'David Herrera',
    role: 'Jefe de Operaciones — LogísticaSur',
    rating: 5,
  },
];

export default function Comunidad() {
  const refLoc = useScrollReveal();
  const refTest = useScrollReveal();

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>COMUNIDAD Y PRESENCIA</SectionLabel>
          <h1 className={styles.title}>Historias de éxito que respaldan nuestra credibilidad</h1>
        </div>

        <div ref={refTest} className={`${styles.testimonials} reveal`}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className={styles.starIcon} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{t.author.split(' ').map(w => w[0]).join('')}</div>
                <div>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>40+</span>
            <span className={styles.statLabel}>Empresas impactadas</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statCard}>
            <span className={styles.statValue}>6+ años</span>
            <span className={styles.statLabel}>Construyendo cultura preventiva</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statCard}>
            <span className={styles.statValue}>4 dptos</span>
            <span className={styles.statLabel}>Presencia regional activa</span>
          </div>
        </div>

        <div ref={refLoc} className={`${styles.locations} reveal`}>
          <h2 className={styles.locTitle}>Nuestra Comunidad — Presencia Regional</h2>
          <div className={styles.locGrid}>
            {departments.map((d, i) => (
              <div key={i} className={styles.locCard}>
                <MapPin size={18} className={styles.locIcon} />
                <strong className={styles.locName}>{d.name}</strong>
                <p className={styles.locCities}>{d.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
