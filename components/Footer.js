import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h3 className="h3">Idea of:</h3>
        <Link prefetch={false} href="https://www.ivansmiths.com/">
          <a target="_blank" rel="noopener noreferrer">
            <button className="btn h2">IVAN SMITHS</button>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
