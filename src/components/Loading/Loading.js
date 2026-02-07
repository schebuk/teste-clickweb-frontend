import React from 'react';
import { PawPrint } from 'lucide-react';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <PawPrint size={60} color="#f4c430" />
        </div>
        <div className={styles.text}>
          <h2>Pett Love</h2>
          <p>Conectando almas peludas...</p>
        </div>
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;