import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ProductsComponent from './ProductsComponent';
import { filterCategory, setProducts } from '../redux/actions/productsAction';
import axios from "axios";
import { useEffect } from 'react';


const ProductsList = () => {
    const dispatch = useDispatch();
    const showProduct=useSelector(state=>state.products.products);
    const showFilterCategory=useSelector(state=>state.products.filterCategory);

    console.log("showProducts",showProduct);
    console.log("TYPEOF",typeof showProduct);
    console.log("showFilterCategory",showFilterCategory);

    const fetchProducts= async ()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>console.log("ERR:",err));
        console.log("response:",response.data)
        const action=setProducts(response.data);
        dispatch(action)
    }
    useEffect(()=>{
        fetchProducts();
        
    },[]);

    
    
    
   
    
    
    
    
   
    return (
        <div className="ui grid container">
            
            <ProductsComponent/>

           
        </div>
    )
}

export default ProductsList
