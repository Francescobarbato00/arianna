import Header from './components/Header';
import Footer from './components/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Aggiungiamo delle icone per il contatto
import ChatBot from './components/ChatBot';
const Contact = () => {
  return (
    <>
      <Header />
      <ChatBot/>

      {/* Sezione principale */}
      <main className="bg-[#e9f2f7] py-16 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Informazioni dell'Ufficio */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#003552] mb-6 leading-tight">
              Siamo qui per aiutarti
            </h1>
            <h2 className="text-2xl font-semibold text-[#003552]">
              Informazioni Ufficio
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-center space-x-3">
                <FaClock className="text-[#003552]" />
                <p>Lunedì–Venerdì, 8:30am–6:00pm</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#003552]" />
                <p>Via Taranto, 95/LT, 00182 Roma (RM), Italia</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#003552]" />
                <p>+39 06 7720 4459</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#003552]" />
                <p>info@studiocompagno.com</p>
              </div>
            </div>
          </div>

          {/* Form di Contatto */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Il tuo nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Il tuo nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#003552] focus:ring-1 focus:ring-[#003552] transition duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Indirizzo Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Indirizzo Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#003552] focus:ring-1 focus:ring-[#003552] transition duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefono</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Telefono"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#003552] focus:ring-1 focus:ring-[#003552] transition duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Il tuo messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Il tuo messaggio"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#003552] focus:ring-1 focus:ring-[#003552] transition duration-300"
                />
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  className="bg-[#003552] text-white py-3 px-6 rounded-md hover:bg-[#002d42] focus:outline-none transition-colors duration-300"
                >
                  Invia Messaggio
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
