import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/AboutSection';
import TKMoments from './components/AboutSection';
import WeddingCarousel from './components/story';
import WeddingStories from './components/WeddingStories';
import WeddingFilms from './components/WeddingFilms';
import AboutPage from './components/AboutPage';
// import  AkshatPhotography from './components/packing';
import Packages from './components/Packages';
// import BookingConfirmation from './components/packing';
import { PackageBuilder } from './components/package-builder'
import Packageposter from './components/packageposter';
import ContectUs from './components/contact';
// import Footer from './components/fotter';
import MinimalFooter from './components/fotter';

const getPageFromHash = () => {
  if (window.location.hash === '#wedding-stories') return 'wedding-stories';
  if (window.location.hash === '#wedding-films') return 'wedding-films';
  if (window.location.hash === '#about') return 'about';
  if (window.location.hash === '#contact') return 'contact';
  return 'home';
};


function App() {
  const [showPackageBuilder, setShowPackageBuilder] = useState(false);
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const syncPageWithHash = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', syncPageWithHash);
    window.addEventListener('popstate', syncPageWithHash);
    return () => {
      window.removeEventListener('hashchange', syncPageWithHash);
      window.removeEventListener('popstate', syncPageWithHash);
    };
  }, []);

  const handleNavigate = (target) => {
    setShowPackageBuilder(false);

    if (
      target === 'wedding-stories' ||
      target === 'wedding-films' ||
      target === 'about' ||
      target === 'contact'
    ) {
      setCurrentPage(target);
      window.history.pushState(null, '', `#${target}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage('home');
    window.history.pushState(null, '', `#${target}`);
    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <>
      {showPackageBuilder ? (
        <PackageBuilder onBack={() => setShowPackageBuilder(false)} />
      ) : (
        <>
          <Header
            alwaysDark={
              currentPage === 'wedding-stories' ||
              currentPage === 'wedding-films' ||
              currentPage === 'about' ||
              currentPage === 'contact'
            }
            onNavigate={handleNavigate}
          />
          {currentPage === 'wedding-stories' ? (
            <WeddingStories />
          ) : currentPage === 'wedding-films' ? (
            <WeddingFilms />
          ) : currentPage === 'about' ? (
            <AboutPage />
          ) : currentPage === 'contact' ? (
            <ContectUs />
          ) : (
            <>
              <Hero onBuildPackage={() => setShowPackageBuilder(true)} />
              <TKMoments />
              <WeddingCarousel/>
              <Packageposter onBuildPackage={() => setShowPackageBuilder(true)} />
            </>
          )}
          <MinimalFooter onNavigate={handleNavigate} />



        </>
      )}
      
    </>
  );
}

export default App;
