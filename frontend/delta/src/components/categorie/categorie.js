import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Categories(props) {
    const navigate = useNavigate();
    const categorieElements = props.data.map(i => <div 
        key={i.id} 
        className={ 'categories__item'}
    >
        <h3 className='categorie__subtitle'>Nom de la categorie : {i.name}</h3>

        
        
        <button 
            className={"categories__deleteButton"} 
            onClick={event => props.deletecategorie(event, i.id)} /* we need a callback to pass a parameter to our event handler */
        >Delete</button>

        
        <button 
            className={"categories__liste"}
            onClick={event =>{navigate("/Article_in_categorie?id=" + i.id + "&name=" + i.name);}}
        >Liste des articles</button>

    </div>)

    return (
        <div className="categorie">
            <h2 className='categorie__title'>catégories disponibles</h2>

            <div className='categorie__container'>
                {categorieElements}
            </div>
        </div>
    )
}