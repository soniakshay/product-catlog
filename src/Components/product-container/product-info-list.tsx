import React, {useEffect} from 'react';
import Hoc from "../Hoc/hoc";
import './product-info-list.css'
import {Col, Row} from "react-bootstrap";
import {BsFileMinus, BsFilePlus} from "react-icons/bs";
export interface ProductInfo {
    productinfo: any,
    addtocart: any,
    increseQuantity: any,
    decreseQuantity: any
}

function ProductInfoList(props: ProductInfo) {
    const {productinfo} =  props;
    return (
        <Hoc>
            <div className='productListInfo'>
                <Row>
                    <Col lg={2} md={2} sm={2}>
                        <div className='productImageList'>
                            <img src={productinfo.image}/>
                        </div>
                    </Col>
                    <Col lg={10} md={10} sm= {10}>
                        <div className='producttitleList'>
                            <span>{productinfo.title}</span>
                        </div>
                        <div className='productdescList'>
                            <span>{productinfo.description}</span>
                        </div>
                        <div className='productAvailableItemMsgList'>
                            {productinfo.AvailbleQty < 6 && (
                                <span>Hurry UP!!! Only {productinfo.AvailbleQty} item left</span>
                            )}

                        </div>
                        <div className='productPriceList'>
                            <span>${productinfo.price}</span>
                        </div>

                        <div className='addToCartMainList'>
                            { productinfo.Quantity === 0 ?   <button onClick={()=> {props.addtocart(productinfo)}}>Add To Cart</button> : (
                                <div className='updateQuntityList'>
                                    <div className='updateQuntityLeftList'>  <button onClick={()=> {props.decreseQuantity(productinfo)}}>  <BsFileMinus size={30}/></button></div>
                                    <div className='updateQuntityCenterList'><span>{productinfo.Quantity}</span></div>
                                    <div className='updateQuntityRightList'> <button onClick={()=> {props.increseQuantity(productinfo)}}> <BsFilePlus size={30}/></button></div>
                                </div>
                            )
                            }
                        </div>
                    </Col>
                </Row>
            </div>

        </Hoc>
    )

}

export default ProductInfoList;
