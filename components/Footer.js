import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h2 className="h3">Idea of:</h2>
        <Link prefetch={false} href="https://www.ivansmiths.com/">
          <a target="_blank" rel="noopener noreferrer">
            <button className="btn h2">IVAN SMITHS</button>
          </a>
        </Link>
        <Link href="https://f000.backblazeb2.com/file/FirstTestModel/Rocket_Ship_01.gltf">
          <a>Download</a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
