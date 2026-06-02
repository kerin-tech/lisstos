import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMain}>LISSTOS</span>
              <span className={styles.logoSub}>HSEQ S.A.S.</span>
            </Link>
            <p className={styles.tagline}>
              <em>Seguridad que inspira, calidad que transforma.</em>
            </p>
            <p className={styles.meta}>NIT: 901225548</p>
            <p className={styles.meta}>Calle 26 # 38-21, Palmira, Colombia</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.links}>
              <li><Link to="/servicios">Gestión del Talento Humano</Link></li>
              <li><Link to="/servicios">Capacitaciones Empresariales</Link></li>
              <li><Link to="/servicios">Monitoreo de KPIs</Link></li>
              <li><Link to="/servicios">Sistemas de Gestión HSEQ</Link></li>
              <li><Link to="/servicios">Certificaciones ISO</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Empresa</h4>
            <ul className={styles.links}>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/nosotros">Misión y Visión</Link></li>
              <li><Link to="/nosotros">Política de Calidad</Link></li>
              <li><Link to="/blog">Blog Institucional</Link></li>
              <li><a href="https://forms.gle/YSPiDZZjy6rdGLjj9" target="_blank" rel="noopener noreferrer">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contacto y RRSS</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className={styles.socialIcon}>
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {currentYear} LISSTOS HSEQ S.A.S. — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
