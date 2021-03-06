import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h5 className="h3">Idea of:</h5>
        <a
          href="https://www.ivansmiths.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn h2">IVAN SMITHS</button>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
