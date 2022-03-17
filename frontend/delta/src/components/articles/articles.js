export default function articles(props) {
    const articlesElements = props.data.map(i => <div 
        key={i.id} 
        className={ 'articles__item'}
    >
        
        <h3 className='article__subtitle'>Nom de l'article: {i.name}</h3>
        <p style={{fontSize: "14px",color: "white"}} >Contenue : {i.contenu} </p> {/* inline style example, style is assigned a JS object */}
        <p style = {{color: "white"}}>auteur: {i.auteur} </p>
        <p style = {{color: "white"}}>date: {i.date}</p>
        
        <button 
            className={"articles__deleteButton"} 
            onClick={event => props.deletearticle(event, i.id)} /* we need a callback to pass a parameter to our event handler */
        >Delete</button>
    </div>)

    return (
        <div className="articles">
            <h2 className='article__title'>articles disponibles</h2>

            <div className='articles__container'>
                {articlesElements}
            </div>
        </div>
    )
}