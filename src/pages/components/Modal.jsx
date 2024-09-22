import { useEffect } from 'react';

const Modal = ({ isVisible, onClose }) => {
  // Chiude il modal quando si preme "Escape"
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto relative overflow-y-auto h-auto lg:h-[90vh]">
        {/* Pulsante per chiudere il form */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-[#003552]">
          Richiedi una consulenza
        </h2>

        <form className="space-y-6">
          {/* Nome */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#003552]"
                placeholder="Inserisci il tuo nome"
              />
            </div>

            {/* Cognome */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cognome</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#003552]"
                placeholder="Inserisci il tuo cognome"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#003552]"
              placeholder="Inserisci la tua email"
            />
          </div>

          {/* Numero di telefono */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Numero di telefono</label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#003552]"
              placeholder="Inserisci il tuo numero"
            />
          </div>

          {/* Oggetto */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Oggetto</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#003552]"
              placeholder="Oggetto del messaggio"
            />
          </div>

          {/* Messaggio */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#003552]"
              placeholder="Inserisci il tuo messaggio"
              rows="4"
            />
          </div>

          {/* Pulsanti */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Annulla
            </button>
            <button
              type="submit"
              className="bg-[#003552] text-white px-6 py-3 rounded-lg hover:bg-[#005580]"
            >
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
