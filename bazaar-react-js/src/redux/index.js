import { combineReducers } from "redux";
import {Authentication} from "./reducers/AuthReducers";
import { Category } from "./reducers/CategoryReducers";
import { Product } from "./reducers/ProductReducers";
const rootReducer=combineReducers({
    Authentication,
    Category,
    Product

})

export default rootReducer