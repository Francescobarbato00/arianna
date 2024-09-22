import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import CallToAction from './components/CallToAction';
import ChatBot from './components/ChatBot';

const Articles = () => {
  return (
    <>
      <Header />
      <ChatBot/>
      <main className="bg-[#f4f7fa] py-16 px-4 md:px-8">
        {/* Titolo della pagina */}
        <div className="container mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#003552] mb-4">
            Approfondimenti Legali
          </h1>
          <p className="text-lg text-gray-600">
            Notizie, consigli e pratiche migliori dal nostro team di esperti legali.
          </p>
        </div>

        {/* Griglia articoli */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Articolo 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/foto1.jpg" // Sostituisci con il percorso dell'immagine
              alt="Articolo 1"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm">10 Gennaio, 2024</p>
              <h2 className="text-xl font-semibold text-[#003552] mt-2">Le nuove sfide del diritto digitale</h2>
              <p className="text-gray-600 mt-4 mb-6">
                Scopri come la regolamentazione del web sta evolvendo e quali sono le implicazioni legali per le aziende che operano online.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Scopri di più →</a>
            </div>
          </div>

          {/* Articolo 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/foto2.jpg" // Sostituisci con il percorso dell'immagine
              alt="Articolo 2"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm">5 Gennaio, 2024</p>
              <h2 className="text-xl font-semibold text-[#003552] mt-2">Diritto del lavoro: cosa cambia nel 2024</h2>
              <p className="text-gray-600 mt-4 mb-6">
                Analisi delle ultime normative sul diritto del lavoro e delle nuove tutele per i lavoratori e datori di lavoro.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Scopri di più →</a>
            </div>
          </div>

          {/* Articolo 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/foto3.jpg" // Sostituisci con il percorso dell'immagine
              alt="Articolo 3"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm">20 Dicembre, 2023</p>
              <h2 className="text-xl font-semibold text-[#003552] mt-2">Le implicazioni fiscali per le PMI nel 2024</h2>
              <p className="text-gray-600 mt-4 mb-6">
                Scopri come le nuove regolamentazioni fiscali possono impattare le piccole e medie imprese e quali soluzioni adottare.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Scopri di più →</a>
            </div>
          </div>
        </div>

        {/* Colonna laterale */}
        <div className="container mx-auto mt-16">
          <div className="bg-[#003552] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Ricevi notizie legali, consigli e pratiche migliori direttamente nella tua casella email.</h3>
            <p className="mb-4">Scritto dai migliori, per i migliori.</p>
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Indirizzo email"
                className="w-full p-4 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                →
              </button>
            </div>
          </div>
        </div>
      </main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Articles;
