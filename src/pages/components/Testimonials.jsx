import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Il team dello Studio Legale Compagno fornisce sempre servizi legali attenti e professionali in tempi rapidi.',
      author: 'Mario Rossi, Cliente Diritto Fiscale',
    },
    {
      text: 'Grazie a loro, siamo riusciti a risolvere una questione complessa con risultati eccellenti.',
      author: 'Luca Bianchi, Cliente Proprietà Intellettuale',
    },
    {
      text: 'Professionali, competenti e molto disponibili: lo Studio Compagno è stato fondamentale per la nostra azienda.',
      author: 'Giulia Verdi, Cliente Diritto Immobiliare',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Funzione per passare al commento successivo
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Scorrimento automatico ogni 10 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000); // 10000 ms = 10 secondi

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f0f4f8] py-16 flex justify-center items-center relative overflow-hidden">
      {/* Testimonial corrente */}
      <div className="text-center max-w-4xl mx-4">
        <p className="text-3xl italic text-[#00486d] font-light leading-relaxed mb-4">
          "{testimonials[currentTestimonial].text}"
        </p>
        <p className="text-sm text-gray-500 font-medium">
          {testimonials[currentTestimonial].author}
        </p>
      </div>

      {/* Freccia destra */}
      <button
        onClick={nextTestimonial}
        className="absolute right-8 text-[#00486d] text-6xl opacity-70 hover:opacity-100 transition-opacity"
      >
        &#8250;
      </button>
    </section>
  );
};

export default Testimonials;
