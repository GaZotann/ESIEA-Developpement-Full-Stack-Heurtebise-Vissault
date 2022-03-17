import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/navigation';
import Articles from './components/articles/articles';
import Categories from './components/categorie/categorie';
import Newarticle from './components/newarticles/Newarticle';
/*import IndexArticle from './components/Article/IndexArticle';*/
import Header from './components/Header';

import "./components/navigation/navigation.css"
import './components/articles/articles.css';
import './components/categorie/categorie.css';
import './components/newarticles/newarticle.css'


function App() {
  
  const [toDelete, setToDelete] = useState({deleting: false});
  const [posting, setPosting] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);
  let test = [];
  // check if url uses a secured protocol
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";
  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }

  //<-----------------------------------------------------------------articles---------------------------------------------------->
  
  function article(event){
    test = true;
    
  }
  function categorie(){
    test = false;

  }
  
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

  //<-----------------------------------------------------------------categories---------------------------------------------------->
  const [allCategories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/`)
    .then(res => res.json())
    .then(data => {
      setCategories(data);
    })
    .catch(e => console.log(e.toString()));
  }, [posting, toDelete]);

  function deletecategorie(event, id) {
    event.stopPropagation();

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Ceci est une action non reversible !",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "Annuler",
      confirmButtonText: 'Oui, supprimer cette catégorie!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        setToDelete({deleting: true, categorieId: id});

        Swal.fire(
          'Supprimé!',
          'Votre catégorie a été supprimé avec succès'
        )
      };
    });
    
  }

  useEffect(() => {
    if (toDelete.deleting) {
      fetch(`http://localhost:9000/categorie/${toDelete.categorieId}`, {
        method: "DELETE"
      })
      // .then(res => {if(res) {res.json()}}) this endpoint doesn't return a body inside the response
      .then(() => {
        setToDelete({deleting: false, categorieId: -1});
      })
      .catch(e => console.log(e.toString()));
    }
  }, [toDelete])
  //<-----------------------------------------------------------------categories---------------------------------------------------->
  //<-----------------------------------------------------------------NewArticle---------------------------------------------------->
  const [newArticle, setNewArticle] = useState({
    name: "",
    contenu: "",
    auteur: "",
    date: ""
  });
  
  function initInvalidInput() {
    setInputInvalid(false);
  }

  function handleChange(event) {
    const {type, name, value} = event.target;

    type === "number" ?
      value.match(/^[0-9]+$/) ?
        setNewArticle(prevState => {
          initInvalidInput(); // we use a separate function here bcz it's bad practice to set a state from inside another state

          return {...prevState,
            [name]: Number(value)
          }
        }) 
        :
        setInputInvalid("Cost must be a positive number")
      :
      value.match(/^.*[<>/\\].*$/) ?
        setInputInvalid("Only letters, numbers and spaces") 
        :
        value.length > 255 ?
          setInputInvalid("Max characters is 255")
          :
          setNewArticle(prevState => {
            initInvalidInput();

            return {...prevState,
              [name]: value
            }
          });
  }
  
  function submitProduct() {
    setPosting(true);
  }
  
  useEffect(() =>{
    if (posting) {
      
      fetch('http://localhost:9000/article', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newArticle)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosting(false);
      })
      .catch(e => console.log(e.toString()));
    }
  }, [posting]);



  //<-----------------------------------------------------------------NewArticle---------------------------------------------------->
  return (
    <div className="App">
      <Header />
      <main>
        <Navigation
          article={article}
          categorie={categorie}
        />
        
        <Articles 
          data={allarticles}
          deletearticle={deletearticle}
          validateUrl={validateUrl}
          url={sampleUrl}
        />
        
        <Categories 
          data={allCategories}
          deletecategorie={deletecategorie}
          validateUrl={validateUrl}
          url={sampleUrl}
        />

        <Newarticle
          newArticle={newArticle}
          handleChange={handleChange}
          submitProduct={submitProduct}
          inputInvalid={inputInvalid} 
        />
      </main>
    </div>
  );
}

export default App;
