import React from "react";
import TableListItem from "./TableListItem";
import { ListeProduit } from "../../donnees/ListeProduit";
// import '../../styles/styleBoxProduit.css'
import styles from '../../styles/styletable.module.css'
const TableList = (props) => {
  return (
      <div id = "liste-produit">

    <table className={styles}>
      <thead style={{backgroundColor:props.themeColor, color: props.color}}>
        <th>Id</th>
        <th>Code</th>
        <th>Libele</th>
        <th>Quantite</th>
        <th>Prix Unitaire</th>
        <th>Ajouter </th>
      </thead>
      {ListeProduit.map((produit, i) => {
        const {
          idProduit,
          codeProduit,
          libeleProduit,
          quantiteProduit,
          prixUnitaireProduit,
        } = produit;


        return (
          <TableListItem
            idProduit={idProduit}
            codeProduit={codeProduit}
            libeleProduit={libeleProduit}
            quantiteProduit={quantiteProduit}
            prixUnitaireProduit={prixUnitaireProduit}
            liste={ListeProduit}
            produit={produit}
            key={i}
            modifierPanier={props.modifierPanier}
            {...props}
          />
        );
      })}
    </table>
    </div>

  );
};

export default TableList;
