import dynamic from 'next/dynamic';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Head from 'next/head';

const Model = dynamic(() => import('../components/Model'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Un Cannolo.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
