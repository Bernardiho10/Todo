import React from "react";
import styles from "./Modal.module.css";

export default function Modal({
  type,
  content,
  color,
  children,
  header,
  toggleModal,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} id={styles.modal}>
        <h2>{header}</h2>
        <div className={styles.content}>{children}</div>
        <div className={styles.actions}>
          <button
            onClick={toggleModal}
            className={styles.centered_toggle_button}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
