import React from 'react';
import Header from "../Header/header";
import Cart from "../cart/cart";
import {Container} from "react-bootstrap";
import ProductContainer from "../product-container/product-container";


function Layout() {
    return (
        <>
            <main>
            <Container>
                <ProductContainer/>
            </Container>
            </main>
        </>
    )

}

export default Layout;
