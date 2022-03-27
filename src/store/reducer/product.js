import { GET_PRODUCT,SET_PRODUCT } from '../constante'

const initialState ={
    products : []
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