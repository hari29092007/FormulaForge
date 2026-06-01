import styles from './SearchBar.module.css';

const SUBJECT_OPTIONS = [
  'All Subjects',
  'Favorites',
  'Math',
  'Physics',
  'Chemistry',
  'Circuits',
  'Quantum Physics',
];

function SearchBar({ searchTerm, subject, onSearchChange, onSubjectChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.field} htmlFor="formula-search">
        <span className={styles.label}>Search formulas</span>
        <input
          id="formula-search"
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name, formula, or description"
          className={styles.input}
        />
      </label>

      <label className={styles.field} htmlFor="subject-filter">
        <span className={styles.label}>Subject filter</span>
        <select
          id="subject-filter"
          value={subject}
          onChange={(event) => onSubjectChange(event.target.value)}
          className={styles.select}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
