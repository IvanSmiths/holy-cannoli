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
          In 3D,
          <br />
          Perché sì.
        </h1>
        <h2 className="subtitle">#holycannoli</h2>
      </div>
    </main>
  );
};

export default Main;
