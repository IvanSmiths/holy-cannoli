import Link from 'next/link';
import { useRouter } from 'next/router';

const Faq = () => {
  let router = useRouter();
  const { locales, locale } = useRouter();

  let question =
    router.locale === 'en'
      ? 'Frequently asked questions:'
      : router.locale === 'it'
      ? 'Domande frequenti:'
      : router.locale === 'fr'
      ? 'Questions fréquemment posées:'
      : router.locale === 'de'
      ? 'Häufig gestellte Fragen:'
      : '';

  let question1 =
    router.locale === 'en'
      ? 'Why did i found this QR Code?'
      : router.locale === 'it'
      ? 'Perché ho trovato questo QR Code?'
      : router.locale === 'fr'
      ? 'Pourquoi ai-je trouvé ce code QR?'
      : router.locale === 'de'
      ? 'Warum habe ich diesen QR-Code gefunden?'
      : '';

  let answer1 =
    router.locale === 'en'
      ? `Didn't had something better to do.`
      : router.locale === 'it'
      ? 'Non avevo niente di meglio da fare.'
      : router.locale === 'fr'
      ? `Je n'avais rien de mieux à faire.`
      : router.locale === 'de'
      ? `Hatte nichts Besseres zu tun.`
      : '';

  let question2 =
    router.locale === 'en'
      ? `Who is behind all this?`
      : router.locale === 'it'
      ? `Chi c'è dietro tutto questo?`
      : router.locale === 'fr'
      ? `Qui est derrière tout ça?`
      : router.locale === 'de'
      ? `Wer steckt dahinter?`
      : '';

  let answer2 =
    router.locale === 'en'
      ? `See button in the footer.`
      : router.locale === 'it'
      ? `Vedi bottone a fine pagina.`
      : router.locale === 'fr'
      ? `Voir le bouton en base de page.`
      : router.locale === 'de'
      ? `Siehe Schaltfläche in der Fußzeile.`
      : '';

  let question3 =
    router.locale === 'en'
      ? `Is this website a marketing campaign?`
      : router.locale === 'it'
      ? `Questo sito è una campagna marketing?`
      : router.locale === 'fr'
      ? `Ce site Web est-il une campagne de marketing?`
      : router.locale === 'de'
      ? `Ist diese Website eine Marketingkampagne?`
      : '';

  let answer3 =
    router.locale === 'en'
      ? `Nope, i genuinely like cannoli.`
      : router.locale === 'it'
      ? `No, mi piacciono genuimanente i cannoli.`
      : router.locale === 'fr'
      ? `Non, j'aime vraiment les cannoli.`
      : router.locale === 'de'
      ? `Nein, ich mag Cannoli wirklich.`
      : '';

  let question4 =
    router.locale === 'en'
      ? `This site is incredibly mind blowing! How do I get any a similar one to advertise my project?`
      : router.locale === 'it'
      ? `Questo sito è incredibilmente strabiliante! Come faccio ad averne uno simile per pubblicizzare un mio progetto?`
      : router.locale === 'fr'
      ? `Ce site est incroyablement époustouflant! Comment puis-je en obtenir un similaire pour annoncer mon projet?`
      : router.locale === 'de'
      ? `Diese Seite ist unglaublich umwerfend! Wie bekomme ich ein ähnliches, um für mein Projekt zu werben?`
      : '';

  let answer4 =
    router.locale === 'en'
      ? `I am delighted by these words! Contact me, these types of projects are totally free.`
      : router.locale === 'it'
      ? `Sono estasiato da queste parole! Contattami, questi tipi di progetti sono totalmente gratuiti.`
      : router.locale === 'fr'
      ? `Je suis ravi de ces paroles! Contactez-moi, ce type de projets est totalement gratuit.`
      : router.locale === 'fr'
      ? `Ich freue mich über diese Worte! Kontaktieren Sie mich, diese Art von Projekten ist völlig kostenlos.`
      : '';

  let question5 =
    router.locale === 'en'
      ? `Has anyone ever complimented you in the question above?`
      : router.locale === 'it'
      ? `Qualcuno ti ha mai fatto il complimento nella domanda sopra?`
      : router.locale === 'fr'
      ? `Quelqu'un vous a-t-il déjà complimenté dans la question ci-dessus?`
      : router.locale === 'de'
      ? `Hat Ihnen jemals jemand in der obigen Frage ein Kompliment gemacht?`
      : '';

  let answer5 =
    router.locale === 'en'
      ? `No.`
      : router.locale === 'it'
      ? `No.`
      : router.locale === 'fr'
      ? `Non.`
      : router.locale === 'de'
      ? `Nein.`
      : '';

  return (
    <section className="faq">
      <div className="cnt-l">
        {locales.map((loc) => (
          <Link key={loc} href="/" locale={loc}>
            <a>
              <h3 className="l">{loc}</h3>
            </a>
          </Link>
        ))}
      </div>
      <h4 className="h2 faq-title">{question}</h4>
      <div className="q-cnt">
        <ul>
          <li className="p">
            <span className="q">{question1}</span> <br />
            {answer1}
          </li>
          <li className="p">
            <span className="q">{question2}</span> <br />
            {answer2}
          </li>
          <li className="p">
            <span className="q">{question3}</span>
            <br /> {answer3}
          </li>
          <li className="p">
            <span className="q">{question4}</span>
            <br /> {answer4}
          </li>
          <li className="p">
            <span className="q">{question5}</span>
            <br /> {answer5}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;
