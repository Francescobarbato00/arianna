import { useState, useEffect } from 'react';

const Modal = ({ isVisible, onClose }) => {
  // Stati per gestire i dati del form
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [oggetto, setOggetto] = useState('');
  const [messaggio, setMessaggio] = useState('');

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

  // Gestione invio form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepara i dati da inviare al backend
    const formData = {
      nome,
      cognome,
      email,
      telefono,
      oggetto,
      messaggio
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Email inviata con successo!');
      } else {
        alert('Si è verificato un errore. Riprova.');
      }
    } catch (error) {
      console.error('Errore nell\'invio:', error);
      alert('Errore nell\'invio della mail.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl mx-4 relative overflow-y-auto max-h-[90vh] transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none transition-all duration-300"
        >
          &times;
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#003552]">
          Richiedi una consulenza
        </h2>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                placeholder="Inserisci il tuo nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cognome</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                placeholder="Inserisci il tuo cognome"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Numero di telefono</label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Inserisci il tuo numero"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Oggetto</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Oggetto del messaggio"
              value={oggetto}
              onChange={(e) => setOggetto(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Inserisci il tuo messaggio"
              rows="4"
              value={messaggio}
              onChange={(e) => setMessaggio(e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Annulla
            </button>
            <button
              type="submit"
              className="bg-[#003552] text-white px-4 py-2 rounded-lg hover:bg-[#005580]"
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
