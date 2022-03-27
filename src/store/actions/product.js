import { GET_PRODUCT,SET_PRODUCT } from '../constante'

export const getProduct = () => {
    return {
        type: GET_PRODUCT
    }
}

/**
 * 
 * @param {object[]} products 
 * @returns Array
 */
export const setProducts = (products) => {
    return {
        type: SET_PRODUCT,
        payload: products
    }
}