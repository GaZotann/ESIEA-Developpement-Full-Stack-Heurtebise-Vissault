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


  useEffect(() => {
    fetch(`http://localhost:9000/`)
    .then(res => res.json())
    .then(data => {
      setCategories(data);
    })
    .catch(e => console.log(e.toString()));
  }, [postingCategorie, toDeleteCategorie]);

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
        setToDeleteCategorie({deletingCategorie: true, categorieId: id});

        Swal.fire(
          'Supprimé!',
          'Votre catégorie a été supprimé avec succès'
        )
      };
    });
    
  }

  useEffect(() => {
    if (toDeleteCategorie.deletingCategorie) {
      fetch(`http://localhost:9000/categorie/${toDeleteCategorie.categorieId}`, {
        method: "DELETE"
      })
      // .then(res => {if(res) {res.json()}}) this endpoint doesn't return a body inside the response
      .then(() => {
        setToDeleteCategorie({deletingCategorie: false, categorieId: -1});
      })
      .catch(e => console.log(e.toString()));
    }
  }, [toDeleteCategorie])
    return(
      <div className='Page_Categorie'>
        <Header/>
          <main>
          <Navigation
          />


          <Categories 
          data={allCategories}
          deletecategorie={deletecategorie}
          validateUrl={validateUrl}
          url={sampleUrl}
        />
        </main>
      </div>
        
    );
}