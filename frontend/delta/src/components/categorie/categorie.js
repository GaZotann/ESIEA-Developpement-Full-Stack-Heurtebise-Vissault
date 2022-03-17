import { useEffect, useState } from 'react';

export default function categories(props) {
    let liste = [];
    let k=0;
    while(true){
        if(props.data[k] == null){
            break;
        }  
        fetch(`http://localhost:9000/${props.data[k].id}/article`)
        .then(res => res.json())
        .then(data => {
            let l = 0;
            while(true){
                if(data[l] == null)
                    break;
                liste.push(data[l].name);
                l++;
            }
            console.log(liste);
            return liste;
            //console.log(data);
        })
        k++;
    }
    

    console.log(liste);

    const categorieElements = props.data.map(i => <div 
        key={i.id} 
        className={ 'categories__item'}
    >
        <h3 className='categorie__subtitle'>Nom de la categories : {i.name}</h3>
        <p style={{fontSize: "14px",color: "white"}} >article : {} </p>

        
        
        <button 
            className={"categories__deleteButton"} 
            onClick={event => props.deletecategorie(event, i.id)} /* we need a callback to pass a parameter to our event handler */
        >Delete</button>
    </div>)

    return (
        <div className="products">
            <h2 className='products__title'>Produits disponibles</h2>

            <div className='products__container'>
                {categorieElements}
            </div>
        </div>
    )
}