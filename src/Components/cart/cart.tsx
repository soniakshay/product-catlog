import React, {useEffect} from 'react';
import Hoc from "../Hoc/hoc";
import './cart.css';
import {useDispatch, useSelector} from "react-redux";
import {Row} from "react-bootstrap";
import {BsFileMinus, BsFilePlus, BsXSquare} from "react-icons/bs";
import {addToCart, closeCartMenu, increseCartItemQuantity, removeItemFromCart} from "../../store/cart/cart.action";


function Cart() {
    const cartInfo = useSelector((state: any)=> state.CartReducer);
    const dispatch =  useDispatch()
    useEffect(() => {
        console.log(cartInfo);
    },[cartInfo])


    const addToCartItem = (item: any) => {
        item.Quantity =  1;
        dispatch(addToCart(item));
    }

    const increseQuantity = (item: any) => {
        item.Quantity =  parseInt(item.Quantity) + 1;
        dispatch(increseCartItemQuantity(item));
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
            {
                cartInfo.openCart && (
                    <>
                        <div className='cartMain' >

                            {
                                <div className='cartItemList'>
                                    <div className='closeBtn'>
                                     <button onClick={()=> dispatch(closeCartMenu())}><BsXSquare size={30}/></button>
                                    </div>
                                    { !cartInfo.cartItem.length && <div className='noAvailable'>
                                                        <span>No Items Available In cart.</span>
                                             </div>
                                    }
                                    {

                                        cartInfo.cartItem.map((item: any) => {
                                            return (
                                                <div className='cartItemMainProductInfo'>
                                                    <div className='cartItem'>
                                                    <div className='cartProductImage'>
                                                        <img src={item.image} className='cartItemImage'/>
                                                    </div>
                                                    <div className='cartproductDesc'>
                                                        <span className='cartProductTitle'>{item.title} </span>
                                                        <span className='cartProductPrice'>$ {item.price} </span>
                                                    </div>
                                                </div>
                                                    <div className='addToCartMainCart'>
                                                        <div className='updateQuntity'>
                                                            <div className='updateQuntityLeft'>  <button onClick={()=> { decreseQuantity(item) }}>  <BsFileMinus size={30}/></button></div>
                                                            <div className='updateQuntityCenter'><span>{item.Quantity}</span></div>
                                                            <div className='updateQuntityRight'> <button onClick={()=> { increseQuantity(item) }} > <BsFilePlus size={30}/></button></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })

                                    }
                                </div>

                            }
                        </div>

                    </>

                )
            }
        </Hoc>

    )

}

export default Cart
