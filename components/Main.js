import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);
const Main = () => {
  let router = useRouter();

  let first =
    router.locale === 'en'
      ? 'A Cannolo'
      : router.locale === 'it'
      ? 'Un '
      : router.locale === 'fr'
      ? 'Un Cannoli'
      : router.locale === 'de'
      ? 'Ein Cannolo'
      : '';

  let second =
    router.locale === 'en'
      ? 'In 3D'
      : router.locale === 'it'
      ? 'In 3D'
      : router.locale === 'fr'
      ? 'En 3D'
      : router.locale === 'de'
      ? 'In 3D'
      : '';

  let third =
    router.locale === 'en'
      ? `'cause i like.`
      : router.locale === 'it'
      ? 'Perché sì'
      : router.locale === 'fr'
      ? 'Car oui.'
      : router.locale === 'de'
      ? 'Weil ja.'
      : '';

  return (
    <main className="main">
      <Model />
      <div className="cnt_text">
        <h1 className="title">
          {first}
          <br />
          {second}
          <br />
          {third}
        </h1>
        <h2 className="subtitle">#holycannoli</h2>
      </div>
    </main>
  );
};

export default Main;
