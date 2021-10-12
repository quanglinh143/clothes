import React from 'react'
import { useParams } from 'react-router';
import axios from "axios";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productsAction';
import "./index.css";
const ProductDetail = () => {
    const dispatch=useDispatch();
    const {productId}=useParams();
    console.log("Param:",productId);
    const productItem=useSelector(state=>state.products.productItem);
    console.log("productItem:",productItem)
    const fetchProducts=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>console.log("ERR9:",err));
        console.log("responsePD:",response);
        const action=selectedProducts(response.data);
        dispatch(action)
    }
    useEffect(()=>{
        fetchProducts()
    },[productId]);
    const productItemReducer=useSelector(state=>state.products.productItem);
    console.log(productItemReducer);
    const {title,price,category,description,image}=productItemReducer
    return (
        
        <div className="detail-container">
            <div className="detail-left"><img className="detail-img" src={image}/></div>
            <div className="detail-right">
                <div className="detail-colum">
                    <div className="detail-title">{title}</div>
                    <div className="detail-price">{price}</div>
                    <div className="detail-category">{category}</div>
                    <div className="detail-description">{description}</div>
                    <button class="ui red button btn-add">Mua Ngay</button>
                </div>
                
            </div>
            <div className="detail-and">AND</div>
        </div>
    )
}

export default ProductDetail
