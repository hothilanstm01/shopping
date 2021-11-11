import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import productData from '../assets/fake-data/products'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

import Helmet from '../components/Helmet'

import numberWithCommas from '../utils/numberWithCommas'


const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsDetail(cartItems))
        setTotalProducts(cartItems.reduce((total, item) => total + (Number(item.quantity)), 0))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])


    return (
        <Helmet title="Cart">
            <div className="cart">
                <div className="cart_info">
                    <div className="cart_info_txt">
                        <p>You have {totalProducts} products in your cart </p>
                        <div className="cart_info_txt_price">
                            <span>Price</span>
                            <span>$ {numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart_info_btn">
                        <Button size="block">
                            Order
                        </Button>
                        <Link to="/catalog">
                            <Button size="block">
                                Back to shop
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="cart_list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} index={index}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
