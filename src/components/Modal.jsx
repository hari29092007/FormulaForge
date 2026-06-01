import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onMouseDown={onClose} role="dialog" aria-modal="true">
      <div
        className={styles.panel}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            console.debug('Modal close button clicked');
            onClose();
          }}
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
