import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.brandBlock}>
        <p className={styles.label}>Prepared by</p>
        <h2 className={styles.name}>J HARI HARA PRASANNA</h2>
        <p className={styles.tagline}>Engineering formulas presented with clarity and speed.</p>
      </div>

      <div className={styles.contactBlock}>
        <p className={styles.label}>Contact</p>
        <a className={styles.email} href="mailto:hariharaprasanna29@gmail.com">
          hariharaprasanna29@gmail.com
        </a>
        <p className={styles.meta}>Professional reference and academic support materials.</p>
        <p className={styles.meta}>© {currentYear} J HARI HARA PRASANNA</p>
      </div>
    </footer>
  );
}

export default Footer;
