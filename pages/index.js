import Main from '../components/Main';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Holy Cannoli!</title>
        <meta name="description" content="I cannoli 3D invadono Ragusa!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fdf033" />
        <meta name="msapplication-navbutton-color" content="#fdf033" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fdf033" />
        <meta property="og:url" content="http://www.holycannoli.xyz" />
        <meta
          property="og:image:url"
          content="https://i.ibb.co/XZ9tTrx/og.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="608" />
        <meta property="og:title" content="Holy Cannoli." />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:description" content="I cannoli invadono Ragusa!" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
