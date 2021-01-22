const Faq = () => {
  return (
    <section className="faq">
      <h3 className="h2 faq-title">Domande frequenti:</h3>
      <div className="q-cnt">
        <ul>
          <li className="p">
            <span className="q">Perché ho trovato questo QR Code?</span> <br />
            Non avevo niente di meglio da fare.
          </li>
          <li className="p">
            <span className="q">Chi c'è dietro tutto questo?</span> <br />
            Vedi bottone sotto.
          </li>
          <li className="p">
            <span className="q">Questo sito è una campagna Marketing?</span>
            <br /> No, mi piacciono genuimanente i cannoli.
          </li>
          <li className="p">
            <span className="q">
              Questo sito è incredibilmente strabiliante! Come faccio ad averne
              uno simile per pubblicizzare un mio progetto?
            </span>
            <br /> Sono estasiato da queste parole! Contattami, questi tipi di
            progetti sono totalmente gratuiti.
          </li>
          <li className="p">
            <span className="q">
              Qualcuno ti ha mai veramente fatto il complimento nella domanda
              sopra?
            </span>
            <br /> No.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;
