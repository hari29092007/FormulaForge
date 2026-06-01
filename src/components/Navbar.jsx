import styles from './Navbar.module.css';

function Navbar({ darkMode, onToggleTheme }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.brandDot} aria-hidden="true" />
        <p className={styles.title}>FormulaForge</p>
      </div>

      <button className={styles.themeButton} type="button" onClick={onToggleTheme}>
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
}

export default Navbar;
