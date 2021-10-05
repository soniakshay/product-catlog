import React, {useEffect} from 'react';
import Hoc from "../Hoc/hoc";
import './product-info.css';
import { BsFileMinus,BsFilePlus } from "react-icons/bs";
export interface ProductInfo {
    productinfo: any,
    addtocart: any,
    increseQuantity: any,
    decreseQuantity: any
}

function ProductInfoGrid(props: ProductInfo) {
    const {productinfo} =  props;
    return (
        <Hoc>
            <div className='productInfoMain'>
                <div className='productImage'>
                    <img src={productinfo.image}/>
                </div>
                <div className='producttitle'>
                    <span>{productinfo.title.substr(0,40)} {productinfo.title.length > 20 ? '...' :''}</span>
                </div>
                <div className='productdesc'>
                    <span>{productinfo.description.substr(0,61)} {productinfo.description.length > 61 ? '...' :''}</span>
                </div>
                    <div className='productAvailableItemMsg'>
                        {productinfo.AvailbleQty < 6 && (
                           <span>Hurry UP!!! Only {productinfo.AvailbleQty} item left</span>
                        )}

                    </div>


                <div className='productPrice'>
                    <span>$ {productinfo.price}</span>
                </div>

                <div className='addToCartMain'>
                    { productinfo.Quantity === 0 ?   <button onClick={()=> {props.addtocart(productinfo)}}>Add To Cart</button> : (
                    <div className='updateQuntity'>
                        <div className='updateQuntityLeft'>  <button onClick={()=> {props.decreseQuantity(productinfo)}}>  <BsFileMinus size={30}/></button></div>
                        <div className='updateQuntityCenter'><span>{productinfo.Quantity}</span></div>
                        <div className='updateQuntityRight'> <button onClick={()=> {props.increseQuantity(productinfo)}}> <BsFilePlus size={30}/></button></div>
                    </div>
                    )
                        }
                </div>
            </div>

        </Hoc>
    )

}

export default ProductInfoGrid;
