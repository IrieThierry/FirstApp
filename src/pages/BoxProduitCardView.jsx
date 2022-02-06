import { CardList } from "../componentes";
import React, { useState } from "react";
import { ListeProduit } from "../donnees/ListeProduit";
import ColumnGroup from "antd/lib/table/ColumnGroup";

const BoxProduitCardView = (props) => {
        
  return (
    <div className="col-md-12 d-flex flex-wrap justify-content-start">
      {ListeProduit.map((produit, i) => {
        const {
          idProduit,
          codeProduit,
          libeleProduit,
          quantiteProduit,
          prixUnitaireProduit,
        } = produit;
        
        return (
          <div style={{ margin: "4px" }} key={i}>
            <CardList
              produit={produit}
              listes={ListeProduit}
              libele={libeleProduit}
              idProduit={idProduit}
              codeProduit={codeProduit}
              quantite={quantiteProduit}
              prix={prixUnitaireProduit}
              colorTheme={props.colorTheme}
              {...props}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BoxProduitCardView;
