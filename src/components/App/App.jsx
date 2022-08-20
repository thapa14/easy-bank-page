import React from 'react';
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Home from '../Home/Home';
import WhyEasyBank from '../why-easy-bank/WhyEasyBank';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <WhyEasyBank />
      <Articles />
      <Footer />
    </>

  )
}

export default App