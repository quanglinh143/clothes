import { useSelector } from "react-redux";
import { ActionTypes } from "../contants/action-type";

const initialState={
    products:[],
    productItem:[],
    filterCategory:[]
}

export const ProductsReducer=(state=initialState,action)=>{
  
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            const createProducts=[...state.products];
            createProducts.push(action.payload);

            return {...state,products:createProducts}
        
        case ActionTypes.SELECTED_PRODUCTS:
            
            return {...state,productItem:action.payload}
        
        case ActionTypes.FILTER_CATEGORY:
            console.log("productszz",action.payload);
            console.log("showProducta",state.products[0]);
            console.log("typeOfPayload",typeof action.payload);
            const filterCategory=state.products[0];
            console.log("filterCategory",filterCategory);
            const showProductItem=filterCategory.filter((fil)=>{
                return fil.category===action.payload
            })
            // console.log("showProduct...:",filterCategory)
           
            return {...state,filterCategory:showProductItem}
            
        default:
            return state
    }
}

