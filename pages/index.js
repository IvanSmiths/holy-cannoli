import Main from '../components/Main';
import Footer from '../components/Footer';
import Head from 'next/head';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="I cannoli 3D invadono Ragusa! Dove si nascondono?"
        />
        <link
          type="image/png"
          sizes="512x512"
          rel="apple-touch-icon"
          href="/favicon.png"
        />
        <link
          type="image/png"
          sizes="512x512"
          rel="shortcut icon"
          href="/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Holy Cannoli" />
        <meta name="application-name" content="Holy Cannoli" />
        <meta name="theme-color" content="#fdf033" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-navbutton-color" content="#fdf033" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fdf033" />
        <meta property="og:url" content="http://www.holycannoli.xyz" />
        <meta
          property="og:image:secure"
          content="https://i.ibb.co/XZ9tTrx/og.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="608" />
        <meta property="og:title" content="Holy Cannoli." />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:description" content="I cannoli invadono Ragusa!" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@IvanSmiths" />
        <meta name="twitter:title" content="Holy Cannoli!" />
        <meta name="twitter:description" content="I cannoli invadono Ragusa." />
        <meta name="twitter:image" content="https://i.ibb.co/XZ9tTrx/og.jpg" />
        <meta name="twitter:image:alt" content="Un Cannolo 3D." />
        <title>Holy Cannoli!</title>
      </Head>
      <Main />
      <Faq />
      <Footer />
    </div>
  );
}
