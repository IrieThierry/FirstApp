import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
/*import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container, BoxProduitTableView, BoxProduitCardView, Error} from './pages'*/

ReactDOM.render(
  <React.StrictMode>
    <App />
{  /*  <Router>

    <Container>
        <Routes>
          <Route path="Home" exact element={<BoxProduitTableView/>}/>
          <Route path="Produit" exact element={<BoxProduitCardView/>}/>
          <Route path="*" exact element={<Error/>}/>
        </Routes>
    </Container>

    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);
