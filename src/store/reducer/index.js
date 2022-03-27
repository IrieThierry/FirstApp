import { combineReducers } from 'redux'
import productListReducer from './product'

const rootReducer = combineReducers({
    product:productListReducer
})
export default rootReducer;