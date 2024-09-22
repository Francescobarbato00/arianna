import { useState } from 'react';
import Modal from './Modal'; // Importa il componente Modal

const CallToAction = () => {
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
    <section className="bg-[#e9f2f7] py-16 text-center">
      <div className="container mx-auto px-4">
        {/* Titolo */}
        <h2 className="text-4xl font-semibold text-[#00486d] mb-4">
          Hai bisogno di consulenza legale professionale?
        </h2>

        {/* Testo descrittivo */}
        <p className="text-lg text-gray-700 mb-8">
          Richiedi una consulenza gratuita con i nostri esperti legali
        </p>

        {/* Bottone */}
        <button
          onClick={openModal} // Al click apri il form
          className="bg-[#00486d] text-white font-semibold py-3 px-8 border-none hover:bg-[#003654] transition-colors duration-300"
        >
          Richiedi una consulenza
        </button>
      </div>

      {/* Modal */}
      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </section>
  );
};

export default CallToAction;
