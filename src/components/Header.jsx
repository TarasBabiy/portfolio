import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Про мене
        </NavLink>
        <NavLink to="/my-city" className={({ isActive }) => (isActive ? 'active' : '')}>
          Моє місто
        </NavLink>
        <NavLink to="/my-future" className={({ isActive }) => (isActive ? 'active' : '')}>
          Мій розвиток
        </NavLink>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default Header;