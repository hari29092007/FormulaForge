import styles from './VariablesSection.module.css';

function VariablesSection({ variables }) {
  if (!variables || variables.length === 0) {
    return null;
  }

  return (
    <div className={styles.section}>
      <h4 className={styles.title}>Variables</h4>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.symbolCol}>Symbol</th>
              <th className={styles.nameCol}>Meaning</th>
              <th className={styles.unitCol}>Unit</th>
            </tr>
          </thead>
          <tbody>
            {variables.map((variable, index) => (
              <tr key={index}>
                <td className={styles.symbol}>
                  <code>{variable.symbol}</code>
                </td>
                <td className={styles.name}>{variable.name}</td>
                <td className={styles.unit}>
                  {variable.unit || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VariablesSection;
