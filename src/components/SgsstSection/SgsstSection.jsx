import { ClipboardCheck, FileSearch, Shield, RefreshCw } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './SgsstSection.module.css';

const phva = [
  { num: '01', fase: 'Planear', desc: 'Definición de política institucional, estructura del sistema y plan de gestión de riesgos.' },
  { num: '02', fase: 'Hacer', desc: 'Implementación práctica de inspecciones, formación, comités y formatos operativos.' },
  { num: '03', fase: 'Verificar', desc: 'Auditorías internas, diagnóstico HSEQ y monitoreo de objetivos.' },
  { num: '04', fase: 'Actuar', desc: 'Acciones correctivas, gestión de no conformidades y mejora continua.' },
];

const concreteServices = [
  { icon: ClipboardCheck, title: 'Diagnóstico técnico y diseño del SG-SST' },
  { icon: FileSearch, title: 'Implementación y plan de intervención HSEQ' },
  { icon: Shield, title: 'Auditorías internas y de cumplimiento' },
  { icon: RefreshCw, title: 'Gestión de riesgos laborales y ambientales' },
];

export default function SgsstSection() {
  const ref = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section id="sgsst" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>SISTEMA DE GESTIÓN HSEQ</SectionLabel>
          <h2 className={styles.title}>Anticipamos, evaluamos y controlamos riesgos</h2>
          <p className={styles.subtitle}>
            Diseñamos, implementamos y administramos sistemas integrales de Seguridad, Salud en el Trabajo y Medio Ambiente. Basados en el Decreto 1072 de 2015 y la Resolución 0312 de 2019.
          </p>
        </div>

        <div ref={ref} className={`${styles.phvaGrid} reveal`}>
          {phva.map((item) => (
            <div key={item.num} className={styles.phvaCard}>
              <span className={styles.phvaNum}>{item.num}</span>
              <h3 className={styles.phvaFase}>{item.fase}</h3>
              <p className={styles.phvaDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div ref={ref2} className={`${styles.servicesGrid} reveal`}>
          {concreteServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className={styles.serviceCard}>
                <Icon size={24} className={styles.serviceIcon} />
                <h4 className={styles.serviceTitle}>{s.title}</h4>
              </div>
            );
          })}
        </div>

        <div className={styles.banner}>
          <p className={styles.bannerText}>
            "El SG-SST es un proceso escalonado y basado en mejora continua, obligatorio para todos los empleadores en Colombia según el Decreto 1072 de 2015 y los estándares mínimos de la Resolución 0312 de 2019."
          </p>
        </div>
      </div>
    </section>
  );
}
