import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref} className={`${styles.formWrapper} reveal`}>
          <h2 className={styles.title}>¿Deseas conocer más de nuestros servicios?</h2>
          <p className={styles.subtitle}>
            Déjanos tus datos y nos comunicaremos contigo para ampliar la información.
          </p>

          {isSubmitted ? (
            <div className={styles.success}>
              <CheckCircle2 size={48} className={styles.successIcon} />
              <h3 className={styles.successTitle}>¡Gracias!</h3>
              <p className={styles.successText}>Nos comunicaremos contigo pronto.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Nombres *</label>
                  <input type="text" required className={styles.input} placeholder="Tu nombre" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Empresa *</label>
                  <input type="text" required className={styles.input} placeholder="Nombre de la empresa" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>NIT *</label>
                  <input type="text" required className={styles.input} placeholder="NIT" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Cargo *</label>
                  <input type="text" required className={styles.input} placeholder="Tu cargo" />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Ciudad *</label>
                  <input type="text" required className={styles.input} placeholder="Ciudad" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Celular *</label>
                  <input type="tel" required className={styles.input} placeholder="+57 300 000 0000" />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Correo electrónico *</label>
                <input type="email" required className={styles.input} placeholder="correo@empresa.co" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Describe tu solicitud aquí</label>
                <textarea className={styles.textarea} rows={4} placeholder="Cuéntanos sobre tu proyecto..." />
              </div>
              <div className={styles.checkboxField}>
                <input type="checkbox" id="terms" required className={styles.checkbox} />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  Acepto términos y condiciones y autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012.
                </label>
              </div>
              <button type="submit" className={styles.submitBtn}>Enviar solicitud</button>
              <p className={styles.legal}>
                Al diligenciar este formulario, autoriza a LISSTOS HSEQ S.A.S. para contactarlo con información sobre nuestros servicios. Damos cumplimiento a la Ley 1581 de 2012 sobre Protección de Datos Personales.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
