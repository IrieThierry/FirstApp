// import { TableList } from "../componentes";
import React, { useState, useEffect } from "react";
import {CustomListButton} from '../componentes'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import './DataViewDemo.css';
import { Button } from 'primereact/button';


import axios from "axios";


const BoxProduitTableView = (props) => {

    const [data, setData] = useState([{id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'}, 
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'}, 
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'}, 
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'}, 
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  quantite:'25', prixVenteTTC:'21000'}, 
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'}, 
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
                                      {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'}
                                    ])
  
    // useEffect(() => {
    //   axios.get('http://10.112.0.100:8081/api/v1/produit').then((result)=> setData(result.data))
    // }, []);

    const columns = [
      { field: 'sourceId', header: 'sourceId' },
      { field: 'fullName', header: 'fullName' },
      { field: 'marque', header: 'marque' },
      { field: 'prixVenteTTC', header: 'prixVenteTTC' },
      { field: 'quantiteProduit', header: 'quantiteProduit' }
  ]

    const textEditor = (options) => {
      return <InputText type="Number" min='0' value={options.value} onChange={(e) => options.editorCallback(e.target.value)} style={{width:'85px'}} className='p-0 mt-0'/>;
  }

  const isPositiveInteger = (val) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
        return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
        case 'quantity':
        case 'price':
            if (isPositiveInteger(newValue))
                rowData[field] = newValue;
            else
                event.preventDefault();
            break;

        default:
            if (newValue.trim().length > 0)
                rowData[field] = newValue;
            else
                event.preventDefault();
            break;
    }
}

const priceEditor = (options) => {
  return <InputNumber type='number'value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
}

const cellEditor = (options) => {
  if (options.field === 'price')
      return priceEditor(options);
  else
      return textEditor(options);
}

const priceBodyTemplate = (rowData) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
}

const ajouterAuPanier = (rowData) => {
  return <Button icon="pi pi-shopping-cart" className=" p-button-outlined" />
} 

    return (
        <div>
        <div className="card">
          <DataTable
            value={data}
            striped
            responsiveLayout="scroll"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            dataKey="id"
            paginator
            emptyMessage="No data found."
            className="datatable-responsive editable-cells-table"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
            editMode="cell"
          >
              <Column field="sourceId" sortable header="sourceId"></Column>
              <Column field="fullName"  sortable header="fullName"></Column>
              <Column field="marque" sortable  header="marque"></Column>
              <Column field="quantite" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete}  sortable  header="quantite" style={{ width: '20%' }}></Column>
              <Column field="prixVenteTTC" sortable  header="prixVenteTTC"></Column>
              <Column body={ajouterAuPanier} sortable  header="Action"></Column>
{/* 
                {
                      columns.map(({ field, header }) => {
                          return <Column key={field} field={field} header={header} sortable style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate}
                              editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                      })
                    } */}
            </DataTable>
        </div>
      </div>
    );
};

export default BoxProduitTableView;