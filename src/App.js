import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from "./components/Hero/hero";
import Products from './components/Products/products'
import {productData} from './components/Products/data'
import Feature from './components/Feature/feature'
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <GlobalStyle />      
      <Hero />
      <Products heading='Pick a side' data={productData}/>
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
