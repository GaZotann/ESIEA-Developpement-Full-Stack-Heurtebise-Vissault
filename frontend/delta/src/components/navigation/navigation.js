export default function Navigation(){
    return(
        <div className={"Boutons"}>
            <button 
            className={"articlebouton"} 
            onClick={articlebouton()} /* we need a callback to pass a parameter to our event handler */
            >Article</button>
            <button 
                className={"categoriebouton"} 
                onClick={categoriebouton()} /* we need a callback to pass a parameter to our event handler */
            >categorie</button>
            <button 
                className={"NewArticlebouton"} 
                onClick={NewArticlebouton()} /* we need a callback to pass a parameter to our event handler */
            >créer un article</button>
        </div>
    );
    function articlebouton(){
        console.log("article ?", this);
    }
    function categoriebouton(){
        console.log("categorie ?", this);
    }
        
    function NewArticlebouton(){
        console.log("New article ? ", this);
    }
}