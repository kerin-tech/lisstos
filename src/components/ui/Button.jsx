import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', href, ...props }) {
  if (href) {
    return (
      <a href={href} className={`${styles.btn} ${styles[variant]}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
