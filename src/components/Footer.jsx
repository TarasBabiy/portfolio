import { FaTelegramPlane, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>
        <FaTelegramPlane className="contact-icon" />
        Telegram: <a href="https://t.me/KrOng1" target="_blank" rel="noopener noreferrer" className="contact-link">@KrOng1</a>
      </p>
      <p>
        <FaEnvelope className="contact-icon" />
        Email: <a href="mailto:kn23-t.babii@nubip.edu.ua" className="contact-link">kn23-t.babii@nubip.edu.ua</a>
      </p>
      <p>
        <FaPhone className="contact-icon" />
        Телефон: <a href="tel:+380688114914" className="contact-link">+380688114914</a>
      </p>
    </div>
  </footer>
);

export default Footer;