import React from 'react';
import '../../styles/styleBoxProduit.css'
import { CustomListButton } from '..';

const TableListItem = (props) => {
    return (
            <tr className='line-hover'>
                <td>{props.idProduit}</td>
                <td>{props.codeProduit}</td>
                <td style={{fontWeight:'500'}}>{props.libeleProduit}</td>
                <td> <CustomListButton quantite={props.quantiteProduit}/></td>
                <td>{props.prixUnitaireProduit}</td>

            </tr>
    );
};



export default TableListItem;