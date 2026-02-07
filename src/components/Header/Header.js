import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button 
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <Menu size={20} />
          <span>Menu</span>
        </button>

        <div className={styles.logoContainer}>
          <div className={styles.logoTop}>
            <img 
              src="/logo-pett-love.png"
              alt="Pett Love" 
              className={styles.logoImage}
            />
          </div>
        </div>

        <button className={styles.entrarBtn}>
          <User size={20} />
          <span>Entrar</span>
        </button>
      </div>

      {/* Dropdown menu que aparece quando clica no botão Menu */}
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <nav className={styles.dropdownNav}>
            <a href="#como-funciona">Como funciona</a>
            <a href="/pets-namorando">Pets Namorando</a>
            <a href="#ajudar">Ajude uma entidade</a>
            <a href="#blog">Blog</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;