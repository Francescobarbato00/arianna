import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import CallToAction from './components/CallToAction';
import ChatBot from './components/ChatBot';

const About = () => {
  return (
    <>
      <Header />
      <ChatBot/>

      {/* Sezione Principale */}
      <main className="bg-[#e9f2f7] py-16 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Testo a Sinistra */}
          <div>
            <h1 className="text-4xl font-bold text-[#003552] mb-6 leading-tight">
              Un team legale focalizzato sui tuoi migliori interessi
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum augue placerat hac libero cras et gravida.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nec aliquam est amet porttitor nulla. Sapien, tortor sit mus nunc. Et augue adipiscing ut orci. Nunc hendrerit nunc augue lectus erat turpis non. Pellentesque consectetur amet, varius in elementum donec.
            </p>
            <p className="text-lg text-gray-700">
              Adipiscing sit et sed adipiscing massa amet. Vulputate enim pellentesque eu elementum mattis lorem.
            </p>
          </div>

          {/* Box a Destra con Numeri */}
          <div className="bg-[#003552] text-white p-8 rounded-lg flex flex-col space-y-4">
            <div>
              <h2 className="text-6xl font-bold">1982</h2>
              <p className="text-lg">L'anno in cui è stato fondato il nostro studio</p>
            </div>
            <div>
              <h2 className="text-6xl font-bold">53</h2>
              <p className="text-lg">Esperti legali in una vasta gamma di pratiche specializzate</p>
            </div>
            <div>
              <h2 className="text-6xl font-bold">4300+</h2>
              <p className="text-lg">Casi gestiti con successo</p>
            </div>
            <div>
              <h2 className="text-6xl font-bold">1,850</h2>
              <p className="text-lg">Clienti soddisfatti</p>
            </div>
          </div>
        </div>

        {/* Sezione Team */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#003552] text-center mb-10">Il nostro team</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card del Team */}
            <div className="bg-white p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/cody-fisher.jpg" // Percorso corretto dell'immagine
                alt="Cody Fisher"
                width={500}
                height={500}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#003552]">Cody Fisher</h3>
              <p className="text-gray-700">Partner</p>
              <a href="#" className="text-[#003552] font-semibold mt-4">Scopri di più →</a>
            </div>

            <div className="bg-white p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/leslie-alexander.jpg" // Percorso corretto dell'immagine
                alt="Leslie Alexander"
                width={500}
                height={500}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#003552]">Leslie Alexander</h3>
              <p className="text-gray-700">Partner</p>
              <a href="#" className="text-[#003552] font-semibold mt-4">Scopri di più →</a>
            </div>

            <div className="bg-white p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/annette-black.jpg" // Percorso corretto dell'immagine
                alt="Annette Black"
                width={500}
                height={500}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#003552]">Annette Black</h3>
              <p className="text-gray-700">Partner</p>
              <a href="#" className="text-[#003552] font-semibold mt-4">Scopri di più →</a>
            </div>
          </div>
        </section>
      </main>
      <CallToAction/>
      <Footer />
    </>
  );
};

export default About;
