import { useEffect, useState } from 'react';
//import Swal from 'sweetalert2';

import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/navigation';
/*import IndexArticle from './components/Article/IndexArticle';*/
import Header from './components/Header';

import "./components/navigation/navigation.css"

function App() {
  
  // check if url uses a secured protocol
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";

  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }
  
  
  return (
    <div className="App">
      <Header />
      <main>
        <Navigation/>
      </main>
    </div>
  );
}

export default App;
