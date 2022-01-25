import React from "react";
import TableListItem from "./TableListItem";
import { ListeProduit } from "../../donnees/ListeProduit";
import '../../styles/styleBoxProduit.css'
const TableList = () => {
  return (
      <div>

    <table>
      <thead>
        <th>Id</th>
        <th>Code</th>
        <th>Libele</th>
        <th>Quantite</th>
        <th>Prix Unitaire</th>
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
            key={i}
          />
        );
      })}
    </table>
    </div>

  );
};

export default TableList;
