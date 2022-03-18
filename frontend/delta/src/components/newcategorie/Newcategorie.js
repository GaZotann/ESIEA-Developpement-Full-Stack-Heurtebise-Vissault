export default function Newcategorie(props) {

    // the inputs are controled by the state in App.js

    return (
        <div className="newcategorie__form">
            <h3 className="newcategorie__title" >Ajouter une categorie</h3>
            <div className="newcategorie__container">
                <label>Nom de la categorie : {" "}</label>
                <input 
                    className="newcategorie__input"
                    type = 'text'
                    name="name" 
                    placeholder="Titre" 
                    value={props.newCategorie.name} 
                    onChange={props.handleChangeCategorie}
                /> 
            </div>

            {props.inputInvalidCategorie && <p>{props.inputInvalidCategorie}</p>}

            <button className="newcategorie__submitButton" onClick={props.submitCategorie}>Ajouter categorie</button>
        </div>
    )
}

