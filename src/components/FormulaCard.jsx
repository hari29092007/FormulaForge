import { useMemo, useState } from 'react';
import { renderToString } from 'katex';
import styles from './FormulaCard.module.css';
import Modal from './Modal';
import VariablesSection from './VariablesSection';

const SUBJECT_ICONS = {
  Mathematics: '∑',
  Physics: '⚛️',
  Chemistry: '⚗️',
  Quantum: '🔬',
  Electrical: '⚡',
};

function FormulaCard({ formula, isFavorite, onToggleFavorite }) {
  const formulaHtml = useMemo(() => {
    return renderToString(formula.formula, {
      throwOnError: false,
      displayMode: false,
    });
  }, [formula.formula]);

  const subjKey = Object.keys(SUBJECT_ICONS).find((k) => formula.subject.includes(k)) || null;
  const subjectIcon = subjKey ? SUBJECT_ICONS[subjKey] : '📘';
  const [open, setOpen] = useState(false);

  const largeHtml = useMemo(() => {
    return renderToString(formula.formula, { throwOnError: false, displayMode: true });
  }, [formula.formula]);

  const renderUnitsHtml = (units) => {
    if (!units) return '';
    // Heuristic: render with KaTeX only for LaTeX commands or explicit markup
    // Avoid treating casual caret notation (e.g. "length^2") as LaTeX that should be rendered
    const latexIndicators = ['\\', '{', '}', '\\degree', '\\frac', '\\times', '\\mathrm', '\\mathrm{', '\\text'];
    const hasLatex = latexIndicators.some((c) => units.includes(c));
    if (hasLatex) {
      try {
        return renderToString(units, { throwOnError: false, displayMode: false });
      } catch (err) {
        // fallthrough to plain text
      }
    }

    // Normalize simple caret superscripts to Unicode superscripts for clearer plain-text display
    let normalized = units
      .replace(/\^2/g, '²')
      .replace(/\^3/g, '³')
      .replace(/\^1/g, '¹')
      .replace(/--/g, '—')
      .replace(/\s*—\s*/g, ' — ')
      .replace(/\s+/g, ' ')
      .trim();

    return normalized;
  };

  const unitsHtml = renderUnitsHtml(formula.units || '—');

  const openCard = () => setOpen(true);
  
  // Determine if formula is "big" (long) - if longer than 50 characters, reduce size
  // Quantum formulas are typically longer and more complex, so they benefit from compact sizing
  const isBigFormula = formula.formula.length > 50;
  const isQuantumPhysics = formula.subject.includes('Quantum');

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={openCard}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCard();
        }
      }}
      aria-label={`Open details for ${formula.name}`}
    >
      <div className={styles.headerRow}>
        <div className={styles.subjectIcon} aria-hidden>{subjectIcon}</div>
        <div className={styles.headerText}>
          <p className={styles.subject}>{formula.subject}</p>
          <h3 className={styles.name}>{formula.name}</h3>
        </div>
        <button
          type="button"
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(formula.id);
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${styles.formula} ${isBigFormula ? styles.formulaCompact : ''} ${isQuantumPhysics ? styles.quantumFormula : ''}`}
        dangerouslySetInnerHTML={{ __html: formulaHtml }}
      />

      <p className={styles.description}>{formula.description}</p>

      <div className={styles.unitRow}>
        <span className={styles.unitLabel}>unit:</span>
        <div className={styles.unitBadges}>
          {(() => {
            const raw = formula.units || '—';
            const parts = String(raw).split(/\s*—\s*|;\s*|,\s*/).map(p => p.trim()).filter(Boolean);
            // Render at least one badge even for empty/placeholder
            if (parts.length === 0) parts.push('—');
            return parts.map((part, i) => {
              const html = renderUnitsHtml(part);
              return (
                <span key={i} className={styles.unitBadge} title={part}>
                  {html && String(html).includes('<') ? (
                    <span dangerouslySetInnerHTML={{ __html: html }} />
                  ) : (
                    html || part
                  )}
                </span>
              );
            });
          })()}
        </div>
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className={styles.modalContent}>
            <h3 className={styles.name}>{formula.name}</h3>
            <div className={styles.largeFormula} dangerouslySetInnerHTML={{ __html: largeHtml }} />
            <p className={styles.description}>{formula.description}</p>
            <div className={styles.modalMeta}>
              <strong>Units:</strong> {formula.units}
            </div>
            <VariablesSection variables={formula.variables} />
          </div>
        </Modal>
      )}
    </article>
  );
}

export default FormulaCard;
