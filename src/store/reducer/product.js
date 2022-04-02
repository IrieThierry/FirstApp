import { GET_PRODUCT,SET_PRODUCT } from '../constante'

const initialState ={
    products : [{ "id": "1000", "code": "f230fh0g3", "name": "DJAMO Watch", "description": "Product Description", "image": "bamboo-watch.jpg", "price": 65, "category": "Accessories", "quantity": 24, "inventoryStatus": "INSTOCK", "rating": 5 }]
} 

const productListReducer =(state= initialState, action)=>{
        switch (action.type) {
            case GET_PRODUCT:
                return state

            case SET_PRODUCT:
                return {
                    ...state,
                    products: action.payload
                }

            default:
                return state
        }
}
export default productListReducer;