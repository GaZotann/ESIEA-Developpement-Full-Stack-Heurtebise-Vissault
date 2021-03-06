import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/navigation';
import Articles from './components/articles/articles';
import Categories from './components/categorie/categorie';
import Newarticle from './components/newarticles/Newarticle';
import Newcategorie from './components/newcategorie/Newcategorie';
import Header from './components/Header';

import "./components/navigation/navigation.css"
import './components/articles/articles.css';
import './components/categorie/categorie.css';
import './components/newarticles/newarticle.css'
import './components/newcategorie/newcategorie.css'



function App() {

  const [toDelete, setToDelete] = useState({deleting: false});
  const [toDeleteCategorie, setToDeleteCategorie] = useState({deletingCategorie: false});
  const [posting, setPosting] = useState(false);
  const [postingCategorie, setPostingCategorie] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);
  const [inputInvalidCategorie, setInputInvalidCategorie] = useState(false);
  let test = [];
  // check if url uses a secured protocol
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";
  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }

  //<-----------------------------------------------------------------articles---------------------------------------------------->
  
  const [allarticles, setarticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/article')
    .then(res => res.json())
    .then(data => {
      setarticles(data);
    })
    .catch(e => console.log(e.toString()));
  }, [posting, toDelete]);

  function deletearticle(event, id) {
    event.stopPropagation();

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Ceci est une action non reversible !",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "Annuler",
      confirmButtonText: 'Oui, supprimer cet article!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        setToDelete({deleting: true, articleId: id});

        Swal.fire(
          'Supprimé!',
          'Votre article a été supprimé avec succès'
        )
      };
    });
    
  }

  useEffect(() => {
    if (toDelete.deleting) {
      fetch(`http://localhost:9000/article/${toDelete.articleId}`, {
        method: "DELETE"
      })
      // .then(res => {if(res) {res.json()}}) this endpoint doesn't return a body inside the response
      .then(() => {
        setToDelete({deleting: false, articleId: -1});
      })
      .catch(e => console.log(e.toString()));
    }
  }, [toDelete])
  //<-----------------------------------------------------------------articles---------------------------------------------------->

  
  return (
    <div className="App">
      <Header />
      <main>
        <Navigation
        />
        
        <Articles 
          data={allarticles}
          deletearticle={deletearticle}
          validateUrl={validateUrl}
          url={sampleUrl}
        />

      </main>
    </div>
  );
}

export default App;
