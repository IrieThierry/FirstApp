import React ,{useState} from "react";
import { Card } from "antd";
import { CustomCardButton, Cart } from "../../componentes";

const CardList = (props) => {

  const [listesProd, setListes] = useState(props.listes);
  const [panier, setPanier] = useState([])


  const updateAdd = (element) => {
    console.log(element.quantiteProd + 1)
    const produitSelect = listesProd.filter(
      (x) => x.id == element.id
    )[0];
    produitSelect.quantiteProd++;
    const liste = listesProd.filter((y) => y.id !== element.id);
    liste.push(produitSelect);
    setListes(liste);
  };

  const updateDel = (element) => {
    const produitSelect = listesProd.filter(
      (x) => x.id === element.id
    )[0];
    produitSelect.quantiteProd--;
    const liste = listesProd.filter((y) => y.id !== element.id);
    liste.push(produitSelect);
    setListes(liste);
  };

  const updateInput = (element, newVal) => {
    const produitSelect = listesProd.filter(
      (x) => x.id == element.id
    )[0];
    const liste = listesProd.filter((y) => y.id !== element.id);
    produitSelect.quantiteProd = newVal;
    liste.push(produitSelect);
    setListes(liste);
  };

  
  const elementSelectionne =(p)=>{
    const produitSelect = listesProd.filter(x=> x.id === p.id)[0]
    console.log("panier 1",panier);
    // panier.push(p)
    // console.log("panier 2",panier);
    // console.log(props)
    // console.log( typeof(props.panierPartager))
    console.log(produitSelect)
    
    let val = props.currentPanier?props.currentPanier:[]

    if(produitSelect.quantiteProd !=0){
      let trouve = val.filter(element=> element.id == produitSelect.id)[0]
      // console.log("val 1",val);
      trouve && props.message(true)
      !trouve && val.push(produitSelect)
      console.log(val)
      props.modifierPanier(val)
      // props.nbreProduit(val.length);
    }
    else console.log('ce produit ');

    // console.log(panier);
    // props.modifierPanier(panier.length)
  }

  return (
    <Card hoverable style={{ width: "220px", display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' } }>
      <div
        style={{
          marginBottom: "15px",
          width: "100%",
          backgroundColor: props.colorTheme,
          color: "white",
          textAlign: "center",
          padding: "2.5rem",
          height: "100px",
          borderRadius: "6px",
        }}
      >
        <h3>{props.codeProduit}</h3>
      </div>
      <div style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "500" }}>
        {props.prix}
      </div>

      <div>{props.libele}</div>

      <div className="d-flex justify-content-center align-items-center">
        <CustomCardButton
          actionAdd={() => updateAdd(props.produit)}
          actionDel={() =>
            props.produit.quantiteProd >= 1 && updateDel(props.produit)
          }
          actionInput={(e) => updateInput(props.produit, e.target.value)}
          quantite={props.produit.quantiteProd}
        />
      </div>
      <div>
        <Cart width='70%' height='35px' bgColor='orange' ajout = {()=>elementSelectionne(props.produit)}/>
      </div>
    </Card>
  );
};


export default CardList;
