import { useState } from 'react';
import Logo from '../../assets/images/Logo.svg';
import './header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Warley Ramires</h1>
      </div>

      <nav className={isOpen ? 'open' : ''}>
        {isOpen && (
          <div className="close-btn" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}

        <ul>
          <li><a href="#home">home</a></li>
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#portifolio">portfólio</a></li>
          <li><a href="#servicos">serviços</a></li>
          <li><a href="#resumo">resumo</a></li>
          <li><a href="#contato">contato</a></li>
        </ul>
      </nav>

      {!isOpen && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
    </header>
  );
}
