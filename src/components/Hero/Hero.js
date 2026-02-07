import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>COMO FUNCIONA</h1>
        <h2 className={styles.subtitle}>
          Encontre um pretendente<br />
          para o seu animal
        </h2>
        <button className={styles.ctaButton}>
          Comece agora!
        </button>
      </div>
    </section>
  );
}

export default Hero;