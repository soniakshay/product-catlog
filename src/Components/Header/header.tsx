import React, {useEffect} from 'react';
import './header.css';
import logo from '../../assets/images/logo.jpg';
import {Badge, Col, Container, Row} from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {closeCartMenu, openCartMenu} from "../../store/cart/cart.action";
function Header() {
    const dispatch = useDispatch();
    const cart = useSelector((state: any)=> state.CartReducer.openCart);
    const openCart = () => {
        if(cart) {
            dispatch(closeCartMenu())
        } else {
            dispatch(openCartMenu())
        }
    }
    useEffect(()=>{

    },[cart])

    return (
        <>
            <div className='headerMain'>
                <Container>
                    <Row>
                        <Col lg={10} md={10} xs={10}>
                            <img src={logo}/>
                        </Col>
                        <Col lg={2} md={2} xs={2}>
                            <div className='iconMain'>
                                <button onClick={openCart}><BsCart2 size={20}/></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )

}

export default Header;
