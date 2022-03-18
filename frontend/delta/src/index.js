import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import './index.css';
import App from './App';
import Page_Categorie from './page/Page_Categorie';
import New_Page from './page/Page_new';
import CategorieArticle from './page/ArticleCategorie'
import reportWebVitals from './reportWebVitals';
import articles from './components/articles/articles';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Page_Categorie' element={<Page_Categorie />} />
      <Route path='/Creer_article' element={<New_Page/>} />
      <Route path='/Article_in_categorie' element={<CategorieArticle/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
