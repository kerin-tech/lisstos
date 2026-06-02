import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Stats.module.css';

function AnimatedStat({ value, suffix, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = parseInt(value);
    if (isNaN(target)) { setDisplay(value); return; }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(el);

      let current = 0;
      const totalSteps = 40;
      const step = Math.max(1, Math.floor(target / totalSteps));
      const interval = 1500 / totalSteps;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setDisplay(current);
      }, interval);
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={styles.statItem}>
      <div className={styles.statValue}>{display}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useScrollReveal();

  const stats = [
    { value: '40', suffix: '+', label: 'EMPRESAS IMPACTADAS' },
    { value: '7', suffix: ' años', label: 'DE EXPERIENCIA EN HSEQ' },
    { value: '5', suffix: ' departamentos', label: 'CON PRESENCIA ACTIVA' },
  ];

  return (
    <section className={styles.statsSection}>
      <div ref={ref} className={`container ${styles.statsContainer} reveal`}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCol} style={{ transitionDelay: `${index * 100}ms` }}>
            <AnimatedStat value={stat.value} suffix={stat.suffix} label={stat.label} />
            {index < stats.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
}
