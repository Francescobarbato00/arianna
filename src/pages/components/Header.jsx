import { useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import Modal from './Modal'; // Importa il componente Modal

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Funzione per aprire il modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Funzione per chiudere il modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* Barra superiore */}
      <div className="bg-[#003552] text-white py-2 text-center text-sm md:text-base">
        Via Taranto, 95/LT. D00182 ROMA (RM)
      </div>

      {/* Intestazione fissa (sticky) */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo con link alla home */}
          <div className="text-2xl font-bold text-[#003552] flex-shrink-0">
            <Link href="/" className="hover:text-[#003552]">
              Studio Legale Compagno
            </Link>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8 text-lg">
            <Link href="/services" className="text-gray-700 hover:text-[#003552]">
              Servizi
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#003552]">
              Chi Siamo
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-[#003552]">
              Articoli
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#003552]">
              Contatti
            </Link>
          </nav>

          {/* Numero telefonico e bottone */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 text-lg">06 77204459</span>
            <Button
              text="Richiedi una consulenza"
              className="hidden md:block"
              onClick={openModal} // Apri il modal al click
            />
          </div>
        </div>
      </header>

      {/* Aggiungi il Modal */}
      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </>
  );
};

export default Header;
