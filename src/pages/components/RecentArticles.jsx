import Image from 'next/image';

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: '12 Cose da Sapere sul Web Design che il tuo Capo Vuole Conoscere',
      date: '13 Dicembre, 2020',
      imageUrl: '/1.jpg', // Percorso corretto immagine
      description: 'Scopri di più',
    },
    {
      id: 2,
      title: 'La Storia del Web Design',
      date: '10 Dicembre, 2020',
      imageUrl: '/2.jpg', // Percorso corretto immagine
      description: 'Scopri di più',
    },
    {
      id: 3,
      title: 'Come Migliorare il Processo di Web Design',
      date: '10 Dicembre, 2020',
      imageUrl: '/3.jpg', // Percorso corretto immagine
      description: 'Scopri di più',
    },
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Titolo */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#00486d] mb-4">Articoli Recenti</h2>

        {/* Testo riempitivo sotto il titolo */}
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl">
          Rimani aggiornato con gli ultimi articoli su tendenze, strategie e soluzioni innovative. Non perdere le novità: continua a seguirci per ricevere consigli utili e informazioni rilevanti sul mondo legale.
        </p>

        {/* Griglia degli articoli */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              style={{ height: '420px' }} // Altezza ridotta per migliorare il layout mobile
            >
              {/* Immagine dell'articolo */}
              <div className="h-2/3">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenuto dell'articolo */}
              <div className="p-4 md:p-6 h-1/3 flex flex-col justify-between">
                <p className="text-sm text-gray-500 mb-1 md:mb-2">{article.date}</p>
                <h3 className="text-lg md:text-xl font-semibold text-[#00486d] mb-2 leading-tight">
                  {article.title}
                </h3>
                <a href="#" className="text-[#00486d] font-medium hover:underline">
                  {article.description} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
