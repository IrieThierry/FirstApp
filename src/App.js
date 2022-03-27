
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login, CardProduit, Container, Error, Commande, MeilleurProduit, NouveauProduit, Accueil, Parametre} from './pages'
// import CardProduit from './pages/CardProduit';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
           
      <Container>
          <Routes>
          <Route path="/" exact element={<Login/>}/>

              <Route path="/Commande" exact element={<Commande/>}/>
              <Route path='/Accueil' exact element={<Accueil />} />
              <Route path='/produit' exact element={<CardProduit/>} />
              <Route path='/noveauProduit' exact element={<NouveauProduit/>} />
              <Route path='/parametre' exact element={<Parametre/>} />
              <Route path='/meilleurProduit' exact element={<MeilleurProduit />} />
              <Route path='*' exact element={<Error/>} />
          </Routes>
      </Container>

    </BrowserRouter>       
      {/* <Login/> */}
      {/* <SingIn/> */}
      {/* <Inscription/> */}
    </div>
  );
}

export default App;
