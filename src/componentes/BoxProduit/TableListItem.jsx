import React, { useState } from "react";
import "../../styles/styleBoxProduit.css";
import { CustomListButton } from "..";

const TableListItem = (props) => {
  const [listeProd, setListeProd] = useState(props.liste);

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

  return (
    <tr className="line-hover" key={props.key}>
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
    </tr>
  );
};

export default TableListItem;
