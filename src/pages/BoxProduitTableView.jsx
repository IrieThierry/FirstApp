import { TableList } from "../componentes";
import React from 'react';

const BoxProduitTableView = (props) => {
    return (
        <div>
            <TableList color = {props.color} themeColor={props.colorTheme} modifierListeSelection={props.modifierListeSelection} modifierPanier={props.modifierPanier} {...props} />
        </div>
    );
};

export default BoxProduitTableView;