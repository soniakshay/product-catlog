import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/layout";
import Header from "./Components/Header/header";
import Cart from "./Components/cart/cart";
import './App.css';
function App() {
  return (
    <div className="App">
        <Header/>
        <Cart/>
      <Layout/>
    </div>
  );
}

export default App;
