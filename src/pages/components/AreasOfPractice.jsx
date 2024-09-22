const AreeDiPratica = () => {
  return (
    <section className="bg-[#f3f8fc] py-20 mt-0">
      {/* Updated background color */}
      <div className="container mx-auto px-4">
        {/* Title and subtitle aligned left */}
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-bold text-[#00486d] mb-4">Come Possiamo Aiutarti?</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Il nostro team legale altamente qualificato è specializzato in diverse aree del diritto, offrendo soluzioni su misura per soddisfare le esigenze di privati e aziende. Scopri di più sui servizi che offriamo e come possiamo aiutarti a risolvere le tue questioni legali.
          </p>
        </div>

        {/* Card container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Proprietà Intellettuale */}
          <div className="bg-white p-8 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00486d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 18l6-6-6-6M6 12h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#00486d] mb-4">Proprietà Intellettuale</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Protezione di creatori e proprietari di invenzioni, opere artistiche e letterarie, musica, design, e brevetti.
            </p>
            <a href="#" className="text-[#00486d] font-semibold hover:underline">
              Scopri di più →
            </a>
          </div>

          {/* Immobiliare */}
          <div className="bg-white p-8 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00486d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M5 10v10m14-10v10m-7-6v6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#00486d] mb-4">Immobiliare</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Assistenza nella compravendita, locazione, gestione e sviluppo di proprietà immobiliari e terreni.
            </p>
            <a href="#" className="text-[#00486d] font-semibold hover:underline">
              Scopri di più →
            </a>
          </div>

          {/* Diritto Fiscale */}
          <div className="bg-white p-8 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00486d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.656 0 3 1.12 3 2.5s-1.344 2.5-3 2.5c-1.656 0-3-1.12-3-2.5S10.344 8 12 8zM12 2v6M9 18h6M6 22h12" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#00486d] mb-4">Diritto Fiscale</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Consulenza su imposte sul reddito, accise, tasse di lusso, e fiscalità aziendale, garantendo conformità e riduzione del rischio fiscale.
            </p>
            <a href="#" className="text-[#00486d] font-semibold hover:underline">
              Scopri di più →
            </a>
          </div>

          {/* Diritto Penale */}
          <div className="bg-white p-8 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00486d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#00486d] mb-4">Diritto Penale</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Difesa in procedimenti penali, dalla rappresentanza in tribunale alla gestione di accuse e indagini per reati penali.
            </p>
            <a href="#" className="text-[#00486d] font-semibold hover:underline">
              Scopri di più →
            </a>
          </div>

          {/* Diritto del Lavoro */}
          <div className="bg-white p-8 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00486d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.42M12 14l-6.16-3.42" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#00486d] mb-4">Diritto del Lavoro</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Consulenza su contratti di lavoro, licenziamenti e controversie aziendali, garantendo tutela dei diritti dei lavoratori e delle aziende.
            </p>
            <a href="#" className="text-[#00486d] font-semibold hover:underline">
              Scopri di più →
            </a>
          </div>

          {/* Diritto di Famiglia */}
          <div className="bg-white p-8 shadow-lg rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#00486d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7c-4 0-8 2-8 5v4h16v-4c0-3-4-5-8-5zM12 3c1.656 0 3 1.344 3 3S13.656 9 12 9 9 7.656 9 6s1.344-3 3-3zM16.5 14.5h-9" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#00486d] mb-4">Diritto di Famiglia</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Assistenza su separazioni, divorzi, affidamento dei figli e successioni, con un approccio sensibile e professionale.
            </p>
            <a href="#" className="text-[#00486d] font-semibold hover:underline">
              Scopri di più →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AreeDiPratica;
