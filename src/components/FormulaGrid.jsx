import FormulaCard from './FormulaCard';
import styles from './FormulaGrid.module.css';

function FormulaGrid({ formulas, favorites, onToggleFavorite }) {
  return (
    <div className={styles.grid}>
      {formulas.map((formula) => (
        <FormulaCard
          key={formula.id}
          formula={formula}
          isFavorite={favorites.includes(formula.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default FormulaGrid;
