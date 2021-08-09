import '../styles/globals.css';
import React, {useState, useCallback, useEffect} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import {ScrollTopContext} from '../components/Animation/Context';

const MyApp= ({Component, pageProps}) =>{
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleUserScroll = useCallback(() => {
   
    if (scrollTop !== window.pageYOffset) {
      setScrollTop(window.pageYOffset);
     
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleUserScroll);

    return () => {
      window.removeEventListener('keydown', handleUserScroll);
    };
  }, [handleUserScroll]);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ScrollTopContext.Provider value={scrollTop}>
        <Component {...pageProps} />
      </ScrollTopContext.Provider>
    </>
  );
}
export default MyApp;
