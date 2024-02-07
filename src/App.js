import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Skills from './Component/Skills/Skills';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import backvideo from "./IMG/backVideo.mp4"
AOS.init();

function App() {
  return (
    <div className="App" data-aos="fade-right">
      <div className='backvideo2'>
        <video autoPlay loop muted>
          <source src={backvideo} type='video/mp4'/>
        </video>
      </div>
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
