import React from 'react';
import styles from './Features.module.css';

function Features() {
  const features = [
    {
      id: 1,
      icon: '/images/cadastre-pet.png',
      title: 'Cadastre seu animal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.',
      image: '/images/card1.png',
      side: 'left'
    },
    {
      id: 2,
      icon: '/images/sear.png',
      title: 'Procure pretendentes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.',
      image: '/images/card2.png',
      side: 'right'
    },
    {
      id: 3,
      icon: '/images/agende.png',
      title: 'Marque um encontro',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.',
      image: '/images/card3.png',
      side: 'left'
    }
  ];

  return (
    <section className={styles.features} id="como-funciona">
      <div className={styles.container}>
        {features.map((feature, index) => (
          <React.Fragment key={feature.id}>
            <div className={`${styles.card} ${styles[feature.side]}`}>
              <div className={styles.imageWrapper}>
                <div className={styles.yellowBox}></div>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className={styles.mainImage} 
                />
              </div>

              <div className={styles.textContent}>
                <div className={styles.featureIcon}>
                  <img 
                    src={feature.icon} 
                    alt={`Ícone ${feature.title}`} 
                    className={styles.iconImage}
                  />
                </div>
                
                <h3 className={styles.title}>
                  {feature.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className={styles.highlight}>{feature.title.split(' ').slice(-1)}</span>
                </h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>

            {index < features.length - 1 && (
              <div className={styles.vectorSpacer}>
                <div className={styles.vectorWrapper}>
                  <img 
                    src={index === 0 ? '/images/vector-1.png' : '/images/vector-2.png'}
                    alt=""
                    className={`${styles.vector} ${styles.desktopVector} ${index === 0 ? styles.vector1 : styles.vector2}`}
                  />
                  <img 
                    src={index === 0 ? '/images/vector-1r.png' : '/images/vector-2r.png'}
                    alt=""
                    className={`${styles.vector} ${styles.mobileVector} ${index === 0 ? styles.vector1r : styles.vector2r}`}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Features;