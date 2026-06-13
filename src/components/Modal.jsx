import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect } from 'react';
import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  useLayoutEffect(() => {
    const { body, documentElement } = document;
    const scrollY = window.scrollY;

    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const previousDocumentStyles = {
      overflow: documentElement.style.overflow,
      overscrollBehavior: documentElement.style.overscrollBehavior,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    documentElement.style.overscrollBehavior = 'none';

    return () => {
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;
      body.style.overflow = previousBodyStyles.overflow;
      documentElement.style.overflow = previousDocumentStyles.overflow;
      documentElement.style.overscrollBehavior = previousDocumentStyles.overscrollBehavior;
      window.scrollTo(0, scrollY);
    };
  }, []);

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
        <div className={styles.header}>
          <button
            type="button"
            className={styles.close}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
