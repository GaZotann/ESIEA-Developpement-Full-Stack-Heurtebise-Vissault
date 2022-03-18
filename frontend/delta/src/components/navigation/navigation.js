import { useNavigate } from "react-router-dom";
import article from "../../App";
//import { useNavigate } from 'react-router-dom';
import Page_Categorie from "../../page/Page_Categorie";


export default function Navigation(props){
    let navigate = useNavigate();
    return(
        <div className={"Boutons"}>
            <button 
            className={"articlebouton"} 
            onClick={(()=>{navigate("/");})} /* we need a callback to pass a parameter to our event handler */
            >Articles</button>
            <button 
                className={"categoriebouton"} 
                onClick={()=>{navigate("/Page_Categorie");}} /* we need a callback to pass a parameter to our event handler */
            >categories</button>
            <button 
                className={"NewArticlebouton"} 
                onClick={()=> {navigate("/Creer_article");}} /* we need a callback to pass a parameter to our event handler */
            >créer un article</button>
        </div>
    );
}