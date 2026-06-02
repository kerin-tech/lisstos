import { MapPin, ClipboardCheck, Gamepad2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Community.module.css';

const departments = [
  { name: 'SANTANDER', cities: 'Bucaramanga, Barrancabermeja, Piedecuesta, Girón, Málaga' },
  { name: 'CAUCA', cities: 'Popayán' },
  { name: 'NARIÑO', cities: 'Pasto, Ipiales' },
  { name: 'VALLE DEL CAUCA', cities: 'Cali, Palmira, Jamundí, Yumbo' },
];

export default function Community() {
  const ref = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section id="community" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>COMUNIDAD Y PRESENCIA</SectionLabel>
          <h2 className={styles.title}>Estamos donde nos necesitas</h2>
        </div>

        <div className={styles.layout}>
          <div ref={ref} className={`${styles.locationsCol} reveal`}>
            <h3 className={styles.colTitle}>Presencia en Colombia</h3>
            <div className={styles.locationsList}>
              {departments.map((d, i) => (
                <div key={i} className={styles.locationItem}>
                  <MapPin size={18} className={styles.locationIcon} />
                  <div>
                    <strong className={styles.deptName}>{d.name}</strong>
                    <p className={styles.citiesList}>{d.cities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref2} className={`${styles.statsCol} reveal`} style={{ transitionDelay: '150ms' }}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>40+</span>
              <span className={styles.statLabel}>Empresas impactadas</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>7 años</span>
              <span className={styles.statLabel}>De experiencia</span>
            </div>
            <div className={styles.badgeStat}>
              Presencia en 4 departamentos
            </div>
          </div>
        </div>

        <div className={styles.learnSection}>
          <h3 className={styles.learnTitle}>Aprende con LISSTOS</h3>
          <div className={styles.learnGrid}>
            <div className={styles.learnCard}>
              <ClipboardCheck size={32} className={styles.learnIcon} />
              <h4 className={styles.learnCardTitle}>Test de Diagnóstico</h4>
              <p className={styles.learnDesc}>Descubre qué tanto sabes sobre normas, prevención de riesgos y buenas prácticas laborales.</p>
              <a href="https://forms.gle/mS9VECKLCuSz9HmT8" target="_blank" rel="noopener noreferrer" className={styles.learnLink}>
                Hacer el test <ArrowRight size={16} />
              </a>
            </div>
            <div className={styles.learnCard}>
              <Gamepad2 size={32} className={styles.learnIcon} />
              <h4 className={styles.learnCardTitle}>Mini-juego de Prevención</h4>
              <p className={styles.learnDesc}>Participa en nuestro juego estilo trivia sobre SST. Responde preguntas y compite por el primer lugar.</p>
              <a href="https://create.kahoot.it/share/reto-lisstos-sst-seguridad-en-el-trabajo/cc1a91ef-8564-4313-8b62-b62bd3155f02" target="_blank" rel="noopener noreferrer" className={styles.learnLink}>
                ¡Jugar ahora! <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
