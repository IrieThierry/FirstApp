import { GET_PRODUCT } from '../constante'

const initialState ={
    products : [{id:'1', sourceId:'571001', fullName:'Vache qui rit', quantite:'25', prixVenteTTC:'21000'}, 
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
    {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'}, 
    {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
    {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
    {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'}, 
    {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'},
    {id:'1', sourceId:'571001', fullName:'Vache qui rit',quantite:'25',  prixVenteTTC:'21000'}
    ]
} 

const productListReducer =(state= initialState, action)=>{
        switch (action.type) {
            case GET_PRODUCT:
                return state
             
            default:
                return state
        }
}
export default productListReducer;