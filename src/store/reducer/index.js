import { combineReducers } from 'redux'
import productListReducer from './product'
import cartReducer from './cart'

const rootReducer = combineReducers({
    product:productListReducer,
    cart:cartReducer
})
export default rootReducer;