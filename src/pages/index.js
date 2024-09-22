import Home from './components/Home';
import AreasOfPractice from './components/AreasOfPractice';
import PersonalizedLegalServices from './components/PersonalizedLegalServices';
import Testimonials from './components/Testimonials';
import RecentArticles from './components/RecentArticles';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Header from './components/Header'; // Sposteremo l'header qui

export default function Index() {
  return (
    <>
      {/* Header fisso */}
      <Header />

      {/* Sezioni principali */}
      <Home />
      <ChatBot/>
      <AreasOfPractice />
      <PersonalizedLegalServices />
      <Testimonials />
      <RecentArticles />
      <CallToAction />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
