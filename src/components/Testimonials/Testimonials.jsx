import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Testimonials.module.css';

const testimonials = [
  { text: 'Gracias al acompañamiento de LISSTOS, logramos crear una verdadera cultura de prevención.', author: 'Director de SST' },
  { text: 'Antes improvisábamos con documentos sueltos. Ahora contamos con un sistema estructurado.', author: 'Gerente de Operaciones' },
  { text: 'Lo que más valoramos fue el trato. Escucharon a cada área, adaptaron el sistema.', author: 'Coordinadora HSEQ' },
  { text: 'Con su orientación, conformamos nuestro comité de seguridad de forma participativa.', author: 'Representante Legal' },
  { text: 'Gracias a su auditoría interna, descubrimos fortalezas que no habíamos notado.', author: 'Jefe de Gestión Humana' },
  { text: 'Nos ayudaron a dejar atrás el uso de Excel y migrar a un software especializado.', author: 'Director Administrativo' },
  { text: 'El proceso de exámenes ocupacionales pasó de ser una carga a convertirse en una herramienta.', author: 'Gerente General' },
];

function getInitials(str) {
  return str.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>LO QUE DICEN DE NOSOTROS</SectionLabel>
          <h2 className={styles.title}>Testimonios</h2>
        </div>

        <div ref={ref} className={`${styles.carousel} reveal`}>
          <button className={styles.arrow} onClick={prev} aria-label="Anterior testimonio">
            <ChevronLeft size={28} />
          </button>

          <div className={styles.cardsTrack}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${styles.card} ${i === current ? styles.active : ''}`}
              >
                <span className={styles.quoteMark}>"</span>
                <p className={styles.quoteText}>{t.text}</p>
                <div className={styles.authorRow}>
                  <div className={styles.avatar}>{getInitials(t.author)}</div>
                  <span className={styles.authorName}>{t.author}</span>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.arrow} onClick={next} aria-label="Siguiente testimonio">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
