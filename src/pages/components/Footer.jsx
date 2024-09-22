import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00486d] py-16 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Colonna Sinistra - Informazioni di Contatto */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Studio Legale Compagno</h3>
          <p className="mb-1">Via Taranto, 95/LT</p>
          <p className="mb-1">00182 Roma (RM), Italia</p>
          <p className="mb-1">Telefono: +39 06 7720 4459</p>
          <p className="mb-4">Email: info@studiocompagno.com</p>

          {/* Icone Social */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Colonna Destra - Iscrizione Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Ricevi aggiornamenti e consigli legali nella tua casella email.
          </h3>
          <form className="flex items-center bg-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Inserisci il tuo indirizzo email"
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-[#00486d] text-white px-6 py-3 hover:bg-[#003654] transition-colors">
              ➔
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © 2024 Studio Legale Compagno. Tutti i diritti riservati.
      </div>
    </footer>
  );
};

export default Footer;
