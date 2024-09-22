import { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import Modal from './Modal'; // Importa il componente Modal

const Home = () => {
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
    <section className="flex min-h-screen">
      <div className="w-1/2 bg-[#e9f2f7] p-16 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-[#003552] mb-6 leading-tight">
        Soluzioni Legali Professionali e Personalizzate
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Il nostro studio si distingue per l’attenzione dedicata a ogni singolo cliente. <br />
        Che tu sia un privato o un’azienda, ti garantiamo assistenza legale completa <br />
        e strategie su misura per affrontare le tue problematiche legali con la massima competenza e professionalità.
        </p>

        
        {/* Bottone per aprire il modal */}
        <Button text="Richiedi una Consulenza" onClick={openModal} />
      </div>

      <div className="w-1/2 bg-[#003552] relative flex items-center justify-center">
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/quadrato.jpg" // Percorso corretto dell'immagine
            alt="Corporate Building"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </section>
  );
};

export default Home;
