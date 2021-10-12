import { ActionTypes } from "../contants/action-type"
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts=(products)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}

export const filterProducts=(products)=>{
    
    return {
        type:ActionTypes.FILTER_CATEGORY,
        payload:products
    }
}

