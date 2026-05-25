import { useEffect, useState } from 'react';

const Header = ({ alwaysDark = false, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (target) => {
    setMenuOpen(false);
    onNavigate?.(target);
  };

  return (
    <header className={`header ${scrolled || menuOpen ? 'scrolled' : ''} ${alwaysDark ? 'always-dark' : ''}`}>
      <a href="#home" className="logo" onClick={() => handleNavigate('home')}>TK MOMENTS</a>

      <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => handleNavigate('home')}>Home</a>
        <a href="#wedding-stories" onClick={() => handleNavigate('wedding-stories')}>Wedding Stories</a>
        <a href="#wedding-films" onClick={() => handleNavigate('wedding-films')}>Wedding Films-shoot</a>
        <a href="#about" onClick={() => handleNavigate('about')}>About</a>
        <a href="#contact" onClick={() => handleNavigate('contact')}>Contact Us</a>
      </nav>

      <button
        type="button"
        className={`menu-btn ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
