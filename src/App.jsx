import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FormulaGrid from './components/FormulaGrid';
import Footer from './components/Footer';
import formulas from './data/formulas';
import styles from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subject, setSubject] = useState('All Subjects');
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.sessionStorage.getItem('formulaTheme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const savedFavorites = window.localStorage.getItem('formulaFavorites');
    const savedTheme = window.sessionStorage.getItem('formulaTheme');

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    document.documentElement.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';
  }, []);

  useEffect(() => {
    window.localStorage.setItem('formulaFavorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const mode = darkMode ? 'dark' : 'light';
    document.documentElement.dataset.theme = mode;
    window.sessionStorage.setItem('formulaTheme', mode);
  }, [darkMode]);

  const filteredFormulas = useMemo(() => {
    return formulas.filter((formula) => {
      const normalizedSubject = formula.subject === 'Mathematics'
        ? 'Math'
        : formula.subject === 'Electrical & Electronics Engineering'
        ? 'Circuits'
        : formula.subject;
      const isFavorite = favorites.includes(formula.id);

      const matchesSubject =
        subject === 'All Subjects' ||
        (subject === 'Favorites' ? isFavorite : normalizedSubject === subject);
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !query ||
        formula.name.toLowerCase().includes(query) ||
        formula.formula.toLowerCase().includes(query) ||
        formula.description.toLowerCase().includes(query) ||
        formula.units.toLowerCase().includes(query);

      return matchesSubject && matchesSearch;
    });
  }, [searchTerm, subject, favorites]);

  const handleToggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <div className={styles.app}>
      <div className={styles.page}>
        <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />

        <section className={styles.hero}>
          <div>
            <p className={styles.tag}>Modern engineering reference</p>
            <h1 className={styles.heading}>FormulaForge for Math, Physics, Chemistry, Circuits, and Quantum Physics.</h1>
            <p className={styles.intro}>
              Browse 75 essential formulas, search instantly, and save your favorites for quick access.
              Designed with responsive dark mode and a polished interface.
            </p>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden>🔎</div>
              <div>
                <h4 className={styles.featureTitle}>Fast search</h4>
                <p className={styles.featureDesc}>Instantly find formulas by name, symbol, or keyword.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden>🧭</div>
              <div>
                <h4 className={styles.featureTitle}>Subject filters</h4>
                <p className={styles.featureDesc}>Narrow results by subject to focus your study.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon} aria-hidden>⭐</div>
              <div>
                <h4 className={styles.featureTitle}>Favorites saved locally</h4>
                <p className={styles.featureDesc}>Save frequently used formulas to access them faster.</p>
              </div>
            </div>
          </div>
        </section>

        <SearchBar
          searchTerm={searchTerm}
          subject={subject}
          onSearchChange={setSearchTerm}
          onSubjectChange={setSubject}
        />

        <div className={styles.summaryBar}>
          <p>{filteredFormulas.length} formulas found</p>
          <p>{favorites.length} favorites selected</p>
        </div>

        {filteredFormulas.length ? (
          <FormulaGrid
            formulas={filteredFormulas}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <div className={styles.emptyState}>
            <h2>No formulas match your search.</h2>
            <p>Try a broader term or select another subject category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
