import { ADD_TO_CART, GET_CART, DELETE_TO_CART } from "../constante";


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const getCart = () => {
    return {
        type: GET_CART
    }
}

export const DeleteToCart = (New_List)=>{
    return{
        type: DELETE_TO_CART,
        payload: New_List
    }
}