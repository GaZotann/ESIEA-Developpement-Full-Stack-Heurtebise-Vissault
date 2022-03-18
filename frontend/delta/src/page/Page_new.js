import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


import './Page_Categorie.css';

import Navigation from '../components/navigation/navigation';
import Articles from '../components/articles/articles';
import Categories from '../components/categorie/categorie';
import Newarticle from '../components/newarticles/Newarticle';
import Newcategorie from '../components/newcategorie/Newcategorie';
import Header from '../components/Header';

import "../components/navigation/navigation.css"
import '../components/articles/articles.css';
import '../components/categorie/categorie.css';
import '../components/newarticles/newarticle.css'
import '../components/newcategorie/newcategorie.css'

export default function Page_Categorie(){
  const [toDelete, setToDelete] = useState({deleting: false});
  const [toDeleteCategorie, setToDeleteCategorie] = useState({deletingCategorie: false});
  const [posting, setPosting] = useState(false);
  const [postingCategorie, setPostingCategorie] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);
  const [inputInvalidCategorie, setInputInvalidCategorie] = useState(false);
  const [allCategories, setCategories] = useState([]);
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";
  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }
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
  
  function submitArticle() {
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
  //<-----------------------------------------------------------------NewCatgorie---------------------------------------------------->
  const [newCategorie, setNewCategorie] = useState({
    name: ""
  });
  
  function initInvalidInputCategorie() {
    setInputInvalidCategorie(false);
  }

  function handleChangeCategorie(event) {
    const {type, name, value} = event.target;

    type === "number" ?
      value.match(/^[0-9]+$/) ?
        setNewCategorie(prevState => {
          initInvalidInputCategorie(); // we use a separate function here bcz it's bad practice to set a state from inside another state

          return {...prevState,
            [name]: Number(value)
          }
        }) 
        :
        setInputInvalidCategorie("Cost must be a positive number")
      :
      value.match(/^.*[<>/\\].*$/) ?
        setInputInvalidCategorie("Only letters, numbers and spaces") 
        :
        value.length > 255 ?
          setInputInvalidCategorie("Max characters is 255")
          :
          setNewCategorie(prevState => {
            initInvalidInputCategorie();

            return {...prevState,
              [name]: value
            }
          });
  }
  
  function submitCategorie() {
    setPostingCategorie(true);
  }
  
  useEffect(() =>{
    if (postingCategorie) {
      
      fetch('http://localhost:9000/categorie', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCategorie)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPostingCategorie(false);
      })
      .catch(e => console.log(e.toString()));
    }
  }, [postingCategorie]);
  
  //<-----------------------------------------------------------------NewCategorie---------------------------------------------------->
  return (
    <div className="Page_new">
      <Header />
      <main>
        <Navigation
        />

        <Newarticle
          newArticle={newArticle}
          handleChange={handleChange}
          submitArticle={submitArticle}
          inputInvalid={inputInvalid} 
        />

        <Newcategorie
          newCategorie={newCategorie}
          handleChangeCategorie={handleChangeCategorie}
          submitCategorie={submitCategorie}
          inputInvalidCategorie={inputInvalidCategorie} 
        />

      </main>
    </div>
  );
}