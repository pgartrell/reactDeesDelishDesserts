import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from "./components/Hero/hero";
import Products from './components/Products'
import {productsData} from './components/Products/data'


function App() {
  return (
    <Router>
      <GlobalStyle />      
      <Hero />
      <Products heading='Pick a side' data={productData}/>
    </Router>
  );
}

export default App;
