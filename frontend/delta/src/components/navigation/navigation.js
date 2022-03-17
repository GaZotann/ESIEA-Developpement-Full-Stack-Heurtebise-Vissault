import article from "../../App";
export default function Navigation(props){
    return(
        <div className={"Boutons"}>
            <button 
            className={"articlebouton"} 
            onClick={event => props.article(event)} /* we need a callback to pass a parameter to our event handler */
            >Articles</button>
            <button 
                className={"categoriebouton"} 
                onClick={event => props.categorie(event)} /* we need a callback to pass a parameter to our event handler */
            >categories</button>
            <button 
                className={"NewArticlebouton"} 
                onClick={event => props.NewArticlebouton(event)} /* we need a callback to pass a parameter to our event handler */
            >créer un article</button>
        </div>
    );
    function articlebouton(){
        console.log("click");
        article();
    }
    function categoriebouton(){
        console.log("categorie ?", this);
    }
        
    function NewArticlebouton(){
        console.log("New article ? ", this);
    }
}