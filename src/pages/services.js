import Header from './components/Header';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Image from 'next/image';
import ChatBot from './components/ChatBot';
const Services = () => {
  return (
    <>
      <Header />
      <ChatBot/>
      <main className="bg-[#e9f2f7] py-16 px-4 md:px-8">
        {/* Titolo e descrizione */}
        <div className="container mx-auto mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#003552] mb-4 leading-tight">
            Il nostro team di esperti legali
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Un team di professionisti qualificati in diverse aree legali, pronti a offrirti la migliore consulenza e rappresentanza legale.
          </p>
        </div>

        {/* Sezione con card per ogni professionista */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
          
            <Image
              src="/images/annette-black.jpg"
              alt="Annette Black"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-[#003552] mb-2">
              Daniela Compagno
            </h2>
            <p className="text-sm text-gray-500 mb-4">Esperta in Proprietà Intellettuale</p>
            <p className="text-gray-700">
              Daniela è specializzata nella protezione della proprietà intellettuale, offrendo consulenza strategica a creatori e aziende.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
            <Image
              src="/images/robert-fox.jpg"
              alt="Robert Fox"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-[#003552] mb-2">
              Robert Fox
            </h2>
            <p className="text-sm text-gray-500 mb-4">Esperto in Diritto Immobiliare</p>
            <p className="text-gray-700">
              Robert si occupa di consulenze su transazioni immobiliari, contratti e controversie, garantendo la massima tutela per i clienti.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
            <Image
              src="/images/jenny-wilson.jpg"
              alt="Jenny Wilson"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-[#003552] mb-2">
              Jenny Wilson
            </h2>
            <p className="text-sm text-gray-500 mb-4">Esperta in Diritto Tributario</p>
            <p className="text-gray-700">
              Jenny offre supporto in materia fiscale, aiutando i clienti a gestire imposte, contenziosi e pianificazioni fiscali complesse.
            </p>
          </div>

        </div>
      </main>
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Services;
