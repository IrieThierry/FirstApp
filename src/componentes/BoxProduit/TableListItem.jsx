import React, { useState } from "react";
import "../../styles/styleBoxProduit.css";
import styles from '../../styles/styletable.module.css'
import { CustomListButton } from "..";
import {ShoppingCartOutlined  } from '@ant-design/icons';

const TableListItem = (props) => {
  const [listeProd, setListeProd] = useState(props.liste);
  const [panier, setPanier] = useState([])

  const updateAdd = (p) => {
    const element = listeProd.filter((x) => x.idProduit == p.idProduit)[0];
    const list = listeProd.filter((x) => x.idProduit !== p.idProduit);
    element.quantiteProduit++;
    list.push(element);
    setListeProd(list);
  };

  const updateLess = (p) => {
    const element = listeProd.filter((x) => x.idProduit == p.idProduit)[0];
    const list = listeProd.filter((x) => x.idProduit !== p.idProduit);
    element.quantiteProduit--;
    list.push(element);
    setListeProd(list);
  };

  const updateInputValue = (p, val) => {
    let currentPrd = listeProd.filter((x) => x.idProduit === p.idProduit)[0];
    let list = listeProd.filter((y) => y.idProduit !== p.idProduit);
    currentPrd.quantiteProduit = val;
    list.push(currentPrd);
    setListeProd(list);
  };

  /* Produit selectionne  produitSelectionne */
  
  const elementSelectionne =(p)=>{
    const produitSelect = listeProd.filter(x=> x.idProduit === p.idProduit)[0]
    console.log("panier 1",panier);
    // panier.push(p)
    // console.log("panier 2",panier);
    // console.log(props)
    // console.log( typeof(props.panierPartager))
    let val = props.currentPanier?props.currentPanier:[]

    if(produitSelect.quantiteProduit !=0){
      let trouve = val.filter(element=> element.idProduit == produitSelect.idProduit)[0]
      // console.log("val 1",val);
      trouve && props.message(true)
      !trouve && val.push(produitSelect)
      props.modifierPanier(val)
      props.nbreProduit(val.length);
    }
    else console.log('ce produit ');
    // console.log("val 2",val)
    // console.log(panier);
    // props.modifierPanier(panier.length)
  }
  // console.log("refresh comp ====");

  return (
    <tr className={styles.linehover} key={props.key}>
      <td>{props.idProduit}</td>
      <td>{props.codeProduit}</td>
      <td style={{ fontWeight: "500" }}>{props.libeleProduit}</td>
      <td>
        {" "}
        <CustomListButton
          actionMoins={() => props.produit.quantiteProduit >= 1 && updateLess(props.produit)}
          actionPlus={() => updateAdd(props.produit)}
          quantite={props.produit.quantiteProduit}
          update={(e) => updateInputValue(props.produit, e.target.value)}
        />
      </td>
      <td>{props.prixUnitaireProduit}</td>
      <td><ShoppingCartOutlined style={{fontSize:'28px', color:'orange'}} onClick={()=> elementSelectionne(props.produit)}/></td>
    </tr>
  );
};

export default TableListItem;
