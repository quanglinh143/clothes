import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "./index.css";
import {Link} from "react-router-dom";
import {filterProducts} from "../redux/actions/productsAction";



const ProductsComponent = () => {
    const dispatch = useDispatch();
    const showProduct=useSelector(state=>state.products.products);
    const showFilterProduct=useSelector(state=>state.products.filterCategory);
    
    console.log("xxxshowProduct",showProduct)
    console.log("xxx",showFilterProduct)
    console.log("typeof:",typeof showFilterProduct)

    // const {id,category,description,image,price,title}=showProduct ;
    
    console.log("showProduct",showProduct[0]);
    const showCategory=['ALL',...new Set(showProduct.length===0?"":showProduct[0].map((item)=>{
        return item.category;
    }))];
    
   
    
    const showProductFilter=(categoryItem)=>{
        const action=filterProducts(categoryItem)
        dispatch(action);
       
    }
   
    
    console.log("showProductFilter",showProductFilter)
    // const itemfil=showProduct.length===0?"":showProduct[0].filter((fil)=>{
    //     if(fil.category===category){
    //         return fil.category===category
    //     }
    // })
    
    return (
        <>
            <div style={{marginTop:"50px",marginBottom:"50px"}}>{showCategory.map((item)=>{
                return <button onClick={()=>showProductFilter(item)}>{item}</button>
            })}</div>
            <div>
                <div className="pc-container">
                    {showProduct.length===0?"":showFilterProduct.length===0?(showProduct[0].map((item)=>{
                        
                        return <Link to={`products/${item.id}`} className="four colum wide" key={item.id}>
                        <div className="ui link cards">
                            <div className="card">
                                <div className="pc_img"><img src={item.image}/></div>
                                <div className="content">
                                    <div className="header">{item.title}</div>
                                    <div className="meta price">{item.price}</div>
                                    <div className="meta ">{item.category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    })):(showFilterProduct.map((item)=>{
                        
                        return <Link to={`products/${item.id}`} className="four colum wide" key={item.id}>
                        <div className="ui link cards">
                            <div className="card">
                                <div className="pc_img"><img src={item.image}/></div>
                                <div className="content">
                                    <div className="header">{item.title}</div>
                                    <div className="meta price">{item.price}</div>
                                    <div className="meta ">{item.category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    }))}
                </div>
            
                
            
            </div>
      
        </>
          
        
        
    )
}

export default ProductsComponent
