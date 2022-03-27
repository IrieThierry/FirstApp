import { ADD_TO_CART, GET_CART } from "../constante";


const initialState = {
    cart: []
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case GET_CART:
            return state;
        default:
            return state;
    }
}

export default cartReducer;