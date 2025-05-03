import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Fitness<span>Fusion</span>
        </Link>
        
        <div 
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/classes" 
              className={`navbar-link ${location.pathname === '/classes' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link 
              to="/trainers" 
              className={`navbar-link ${location.pathname === '/trainers' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Trainers
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing" 
              className={`navbar-link ${location.pathname === '/pricing' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;