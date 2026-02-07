import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './BrowsingPetsPage.module.css';

function BrowsingPetsPage() {
  const allPetPairs = [
    { id: 1, name1: 'Guido', name2: 'Abigail', image1: '/images/pet1-1.png', image2: '/images/pet1-2.png' },
    { id: 2, name1: 'Pancho', name2: 'Kiwi', image1: '/images/pet2-1.png', image2: '/images/pet2-2.png' },
    { id: 3, name1: 'Bingo', name2: 'Jade', image1: '/images/pet3-1.png', image2: '/images/pet3-2.png' },
    { id: 4, name1: 'Lennon', name2: 'Jujuba', image1: '/images/pet4-1.png', image2: '/images/pet4-2.png' },
    { id: 5, name1: 'Guido', name2: 'Abigail', image1: '/images/pet5-1.png', image2: '/images/pet5-2.png' },
    { id: 6, name1: 'Pancho', name2: 'Kiwi', image1: '/images/pet6-1.png', image2: '/images/pet6-2.png' },
    { id: 7, name1: 'Bingo', name2: 'Jade', image1: '/images/pet7-1.png', image2: '/images/pet7-2.png' },
    { id: 8, name1: 'Lennon', name2: 'Jujuba', image1: '/images/pet8-1.png', image2: '/images/pet8-2.png' },
    { id: 9, name1: 'Guido', name2: 'Abigail', image1: '/images/pet9-1.png', image2: '/images/pet9-2.png' },
    { id: 10, name1: 'Pancho', name2: 'Kiwi', image1: '/images/pet10-1.png', image2: '/images/pet10-2.png' },
    { id: 11, name1: 'Bingo', name2: 'Jade', image1: '/images/pet11-1.png', image2: '/images/pet11-2.png' },
    { id: 12, name1: 'Lennon', name2: 'Jujuba', image1: '/images/pet12-1.png', image2: '/images/pet12-2.png' },
  ];

  const [visiblePairs, setVisiblePairs] = useState(6); // Desktop: 6 iniciais
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamanho da tela
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      // Desktop: +6 pares, Mobile: +4 pares
      const increment = isMobile ? 4 : 6;
      setVisiblePairs(prev => Math.min(prev + increment, allPetPairs.length));
      setLoading(false);
    }, 1000);
  };

  // Função para renderizar o conteúdo com publicidades - DESKTOP ORIGINAL
  const renderContentWithAds = () => {
    const displayedPairs = allPetPairs.slice(0, visiblePairs);
    const content = [];
    
    // Configurações: Desktop 6 em 6, Mobile 4 em 4
    const pairsPerGroup = isMobile ? 4 : 6;
    const pairsPerRow = isMobile ? 2 : 3; // Mobile: 2 por linha, Desktop: 3 por linha
    
    for (let i = 0; i < displayedPairs.length; i += pairsPerGroup) {
      const group = displayedPairs.slice(i, i + pairsPerGroup);
      
      // Dividir grupo em linhas
      for (let j = 0; j < group.length; j += pairsPerRow) {
        const rowPairs = group.slice(j, j + pairsPerRow);
        
        if (rowPairs.length > 0) {
          content.push(
            <div key={`row-${i}-${j}`} className={styles.petGrid}>
              {rowPairs.map((pair) => (
                <div key={pair.id} className={styles.petPair}>
                  <div className={styles.petCircle}>
                    <img src={pair.image1} alt={pair.name1} className={styles.petImage} />
                    <p className={styles.petName}>{pair.name1}</p>
                  </div>
                  
                  <div className={styles.heartConnector}>
                    <img src="/images/heart.png" alt="Coração" className={styles.heartImage} />
                  </div>
                  
                  <div className={styles.petCircle}>
                    <img src={pair.image2} alt={pair.name2} className={styles.petImage} />
                    <p className={styles.petName}>{pair.name2}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        }
      }
      
      // Adicionar publicidade após cada grupo (exceto o último)
      if (i + pairsPerGroup < displayedPairs.length) {
        content.push(
          <div key={`ad-${i}`} className={styles.advertisement}>
            <div className={styles.adPlaceholder}>
              Publicidade {isMobile ? '100%' : '750x100'}
            </div>
          </div>
        );
      }
    }
    
    return content;
  };

  return (
    <div className="app">
      <Header />
      <main className={styles.browsingPetsPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Pets <span className={styles.highlight}>namorando</span>
            </h1>
            <p className={styles.subtitle}>
              Duis aute irure dolor in reprehenderit in voluptate
            </p>
          </div>

          {renderContentWithAds()}

          {visiblePairs < allPetPairs.length && (
            <button 
              className={styles.loadMoreBtn}
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Carregar mais antigos'}
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BrowsingPetsPage;