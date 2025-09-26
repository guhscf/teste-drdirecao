import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Servicos />
      <Sobre />
      <Galeria />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppButton /> {/* botão flutuante */}
    </div>
  );
}

/*teste*/

export default App;  