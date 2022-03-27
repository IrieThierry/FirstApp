import React, {useState, useEffect} from "react";
import TableListItem from "./TableListItem";
import { ListeProduit } from "../../donnees/ListeProduit";
// import '../../styles/styleBoxProduit.css'
import styles from '../../styles/styletable.module.css'
import axios from 'axios'

const TableList = (props) => {

  const [data, setData] = useState([{id:'1', sourceId:'571001', fullName:'Vache qui rit', prixVenteTTC:'21000'}])
//   useEffect(() => {
//     axios.get('http://10.112.0.100:8081/api/v1/produit').then((result)=> setData(result.data))
// }, []);

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
      {data.map((produit, i) => {
        const {
          id,
          code,
          fullName,
          prixVenteTTC,
          
        } = produit;

        return (
          <TableListItem
            idProduit={id}
            codeProduit={code}
            libeleProduit={fullName}
            // quantiteProduit={0}
            prixUnitaireProduit={prixVenteTTC}
            liste={data}
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
