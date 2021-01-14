import dynamic from 'next/dynamic';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);
const Main = () => {
  return (
    <main className="main">
      <Model />
      <div className="cnt_text">
        <h1 className="title">
          Un Cannolo
          <br />
          In AR,
          <br />
          Perché si.
        </h1>
      </div>
    </main>
  );
};

export default Main;
