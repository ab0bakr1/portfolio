import React, { Suspense, lazy, useEffect } from 'react'; // أضفنا useEffect
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// استيراد المكونات التي تظهر في أول الصفحة (Static)
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Skills from './Component/Skills/Skills';

// استيراد المكونات الثقيلة بشكل كسول (Lazy)
const PortfolioList = lazy(() => import('./Component/Portfolio/Portfolio'));
const Certificates = lazy(() => import('./Component/CERTIFICATES/CERTIFICATES'));
const Contact = lazy(() => import('./Component/Contact/Contact'));
const Footer = lazy(() => import('./Component/Footer/Footer'));

function App() {
  // يفضل وضع AOS.init داخل useEffect لضمان عملها بعد رندر المكونات
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      
      {/* يمكنك وضع كل المكونات الكسولة داخل Suspense واحد أو توزيعها */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}>
        <PortfolioList />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  ); 
}

export default App;