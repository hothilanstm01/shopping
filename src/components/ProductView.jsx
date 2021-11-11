import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shoping-cart/cartItemsSlide'

import { withRouter } from 'react-router'

import Button from '../components/Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
        price: 0,
        title: '',
        colors: [],
        size: []
    }

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setdescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    } 

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {

        if (color === undefined) {
            alert('Select color, please!')
            return false
        }
        if (size === undefined) {
            alert('Select size, please!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price,
            }))
        }
    }

    const goToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price,
            }))
        }
        props.history.push('/cart')
    }

    return (
        <div className="product">
            <div className="product_images">
                <div className="product_images_list">
                    <div className="product_images_list_item" onClick={() => setPreviewImg
                    (product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product_images_list_item" onClick={() => setPreviewImg
                    (product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product_images_main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description_title">
                        Details
                    </div>
                    <div className="product-description_content" dangerouslySetInnerHTML={{__html:product.description}}></div>
                    <div className="product-description_toggle">
                        <Button size="sm" onClick={() => setdescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Shorter ' : 'Longer'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product_info">
                <h1 className="product_info_title">{product.title}</h1>
                <div className="product_info_item">
                    <span className="product_info_item_price">
                        $ {numberWithCommas(product.price)} 
                    </span>
                </div>
                <div className="product_info_item">
                    <div className="product_info_item_title">Color</div>
                    <div className="product_info_item_list">
                        {product.colors.map((item, index) => (
                            <div key={index} className={`product_info_item_list_item ${color
                                === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product_info_item">
                    <div className="product_info_item_title">Size</div>
                    <div className="product_info_item_list">
                        {product.size.map((item, index) => (
                            <div key={index} className={`product_info_item_list_item ${size
                            === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                <span className="product_info_item_list_item_size">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product_info_item">
                    <div className="product_info_item_title">Quantity</div>
                    <div className="product_info_item_quantity">
                        <div className="product_info_item_quantity_btn" onClick={() => 
                        updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product_info_item_quantity_input">
                            {quantity}
                        </div>
                        <div className="product_info_item_quantity_btn" onClick={() => 
                        updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product_info_item">
                    <Button onClick={() => addToCart()}>Add to cart</Button>
                    <Button onClick={() => goToCart()}>Buy</Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description_title">
                    Details
                </div>
                <div className="product-description_content" dangerouslySetInnerHTML={{__html:product.description}}></div>
                <div className="product-description_toggle">
                    <Button size="sm" onClick={() => setdescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Shorter ' : 'Longer'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView) 
