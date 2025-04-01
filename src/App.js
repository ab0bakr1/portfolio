import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Skills from './Component/Skills/Skills';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Certificates from './Component/CERTIFICATES/Certificates ';
AOS.init();

function App() {
  return (
    <div className="App" data-aos="fade-right">
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
