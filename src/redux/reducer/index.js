import {combineReducers} from "redux";
import {ProductsReducer} from "./ProductsReducers";
const rootReducer=combineReducers({
   products:ProductsReducer
})

export default rootReducer;