import Image from 'next/image';
import Button from './Button'; // Assumendo che tu abbia un componente Button
import { useRouter } from 'next/router'; // Importa useRouter

const PersonalizedLegalServices = () => {
  const router = useRouter(); // Inizializza il router

  return (
    <section className="relative bg-[#e9f2f7] py-20 flex flex-col md:flex-row items-center">
      
      {/* Immagine a sinistra */}
      <div className="w-full md:w-1/2">
        <Image
          src="/avv.jpeg" // Assicurati di usare il percorso corretto per l'immagine
          alt="Avvocato con valigetta"
          width={700}
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Contenitore del testo a destra */}
      <div className="relative w-full md:w-1/2 bg-[#00486d] p-12 text-white flex flex-col justify-center items-start">
        
        {/* Puntini decorativi, posizionati dietro al testo */}
        <div className="absolute top-0 right-[-50px] hidden lg:block">
          <Image
            src="/1.svg" // Assicurati che il percorso sia corretto
            alt="Decorative Dots"
            width={150}
            height={150}
            className="opacity-30"
          />
        </div>

        {/* Testo principale */}
        <h2 className="text-4xl font-bold mb-4">Servizi Legali Personalizzati</h2>
        <p className="text-lg mb-6 leading-relaxed max-w-md">
          Non esiste una soluzione unica per tutte le necessità legali. Creiamo un team e una strategia specifica per i tuoi obiettivi desiderati.
        </p>

        {/* Pulsante */}
        <Button
          text="Scopri il nostro studio"
          className="bg-white text-[#00486d] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
          onClick={() => router.push('/about')} // Naviga alla pagina /about
        />
      </div>
    </section>
  );
};

export default PersonalizedLegalServices;
