import '../styles/globals.css';
import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const MyApp= ({Component, pageProps}) =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("clicked!")
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
