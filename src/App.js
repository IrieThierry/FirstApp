
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login, Container, Error, Commande, MeilleurProduit, NouveauProduit, Parametre, BoxProduitCardView} from './pages'
// import CardProduit from './pages/CardProduit';
import Test from './pages/Test'

function App() {

  return (
    <div className="App">
     <BrowserRouter>
           
      <Container>
          <Routes>
          <Route path="/" exact element={<Login/>}/>

              <Route path="/Commande" exact element={<Commande/>}/>
              <Route path='/produit' exact element={<BoxProduitCardView/>} />
              <Route path='/noveauProduit' exact element={<NouveauProduit/>} />
              <Route path='/parametre' exact element={<Parametre/>} />
              <Route path='/meilleurProduit' exact element={<MeilleurProduit />} />
              <Route path='*' exact element={<Error/>} />
          </Routes>
      </Container>

    </BrowserRouter>        
    {/* <Test/> */}
      {/* <Login/> */}
      {/* <SingIn/> */}
      {/* <Inscription/> */}
    </div>
  );
}

export default App;
