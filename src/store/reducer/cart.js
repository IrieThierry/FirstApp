import { ADD_TO_CART, GET_CART, DELETE_TO_CART } from "../constante";


const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cartList = state.cart.filter((item)=> item.id === action.payload.id)[0]
            return {
                ...state,
                cart: cartList ? [...state.cart] : [...state.cart, action.payload]
            };
            
        case GET_CART: 
            return state;
            
        case DELETE_TO_CART:
            return {...state.cart, cart: state.cart.filter(Item=> Item.id !== action.payload.id)};

        default:
            return state;
    }
}

export default cartReducer;