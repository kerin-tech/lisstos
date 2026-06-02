import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Comunidad', href: '/comunidad' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`${styles.navbar} ${isScrolled || !isHome ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMain}>LISSTOS</span>
          <span className={styles.logoSub}>HSEQ S.A.S.</span>
        </Link>

        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.href} end={link.href === '/'}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/#contact" className={styles.cta}>Contáctanos</Link>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú de navegación"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.href} end={link.href === '/'} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/#contact" className={styles.mobileCta} onClick={() => setIsMobileMenuOpen(false)}>
            Contáctanos
          </Link>
        </div>
      )}
    </nav>
  );
}
