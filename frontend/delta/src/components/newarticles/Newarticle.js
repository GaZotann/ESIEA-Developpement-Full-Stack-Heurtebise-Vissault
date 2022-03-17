export default function Newarticle(props) {

    // the inputs are controled by the state in App.js

    return (
        <div className="newarticle__form">
            <h3 className="newarticle__title" >Ajouter un article</h3>
            <div className="newarticle__container">
                <label>Nom de l'article : {" "}</label>
                <input 
                    className="newarticle__input"
                    type = 'text'
                    name="name" 
                    placeholder="Titre" 
                    value={props.newArticle.name} 
                    onChange={props.handleChange}
                /> 
            </div>

            <textarea
                className="newarticle__description"
                placeholder="Contenue de l'article" 
                name="contenu"
                value={props.newArticle.contenu}
                onChange={props.handleChange}
            />
            
            <div className="newarticle__container">
                <label>Nom de l'auteur : {" "}</label>
                <input 
                    className="newarticle__input"
                    type = 'text'
                    name="auteur"
                    placeholder="Auteur"  
                    value={props.newArticle.auteur}
                    onChange={props.handleChange}
                /> 
            </div>
            
            <div className="newarticle__container">
                <label>Date : {" "}</label>
                <input 
                    className="newarticle__input"
                    type = 'text'
                    name="date" 
                    placeholder="jj/mm/aaaa" 
                    value={props.newArticle.date} 
                    onChange={props.handleChange}
                /> 
            </div>

            {props.inputInvalid && <p>{props.inputInvalid}</p>}

            <button className="newarticle__submitButton" onClick={props.submitProduct}>Ajouter article</button>
        </div>
    )
}

