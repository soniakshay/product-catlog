import React, {useEffect, useState} from 'react';
import Hoc from "../Hoc/hoc";
import ProductInfoGrid from "./product-info";
import productData from '../../assets/data/product-data.json';
import inventoryData from '../../assets/data/inventory.json'
import {Col, Row} from "react-bootstrap";
import './product-container.css';
import { BsList, BsGrid3X3 } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increseCartItemQuantity, removeItemFromCart, setCartItems} from "../../store/cart/cart.action";
import ProductInfoList from "./product-info-list";
const  _ = require('lodash');
function ProductContainer() {
    const [productList,setProductList] =  useState<any>([]);
    const [loadProduct,setloadProduct] =  useState<boolean>(false);
    const [isGridView,setGridView] = useState<boolean>(true);

    const cartInfo = useSelector((state: any)=> state.CartReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(loadProduct) {
            productData.map((item: any) => {
                const matchCartItem = _.find(cartInfo.cartItem, {id: item.id});
                const inventoryItem =  _.find(inventoryData, {id: item.id});
                if (matchCartItem) {
                    item.Quantity = matchCartItem.Quantity;

                } else {
                    item.Quantity = 0;
                }
                item.AvailbleQty =  inventoryItem.available;
            })
            setProductList(productData);
        }

    },[loadProduct,cartInfo])
    useEffect(()=>{
        const cartData = localStorage.getItem('cartItem');
        if(cartData) {
            dispatch(setCartItems(JSON.parse(cartData)));
        }
        setloadProduct(true)

    },[])
    const addToCartItem = (item: any) => {
        item.Quantity =  1;
        dispatch(addToCart(item));
    }

    const increseQuantity = (item: any) => {
        item.Quantity =  parseInt(item.Quantity) + 1;
        if(item.Quantity > item.AvailbleQty) {
            alert('Sorry Only ' + item.AvailbleQty + ' Available!');
        } else {
            dispatch(increseCartItemQuantity(item));
        }
    }
    const decreseQuantity  = (item: any) => {
        item.Quantity =  parseInt(item.Quantity) - 1;
        if(item.Quantity === 0) {
             dispatch(removeItemFromCart(item));
        } else {
            dispatch(increseCartItemQuantity(item));
        }
    }

    return (
        <Hoc>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className='listDataIcon'>
                        <button className='grid' onClick={()=> setGridView(true)}><BsGrid3X3/></button>
                        <button className='list' onClick={()=> setGridView(false)}><BsList/></button>
                    </div>
                </Col>
            </Row>
           <Row>
               {
                    productList.length && (
                       <>

                           {
                               productList.map((product: any)=> {
                                   return (
                                       <Col lg={isGridView ?  3: 12} md={isGridView ?  3: 12} xs={isGridView ?  6: 12}>
                                           {
                                               isGridView ? (
                                                   <ProductInfoGrid productinfo={product}
                                                                    decreseQuantity = {decreseQuantity}
                                                                    increseQuantity = {increseQuantity}
                                                                    addtocart={addToCartItem}  />

                                               ): (
                                                   <ProductInfoList productinfo={product}
                                                                    decreseQuantity = {decreseQuantity}
                                                                    increseQuantity = {increseQuantity}
                                                                    addtocart={addToCartItem}  />
                                               )
                                           }
                                       </Col>
                                   )
                               })
                           }


                       </>
                   )
               }
           </Row>
        </Hoc>
    )

}

export default ProductContainer
