const product_01_image_01 = require('../images/products/product-1.jpg').default
const product_01_image_02 = require('../images/products/product-1.webp').default

const  product_02_image_01 = require('../images/products/product-2.jpg').default
const  product_02_image_02 = require('../images/products/product-2.webp').default

const  product_03_image_01 = require('../images/products/product-3.jpg').default
const  product_03_image_02 = require('../images/products/product-3.webp').default

const  product_04_image_01 = require('../images/products/product-4.jpg').default
const  product_04_image_02 = require('../images/products/product-4.webp').default

const  product_05_image_01 = require('../images/products/product-5.jpg').default
const  product_05_image_02 = require('../images/products/product-5.webp').default

const  product_06_image_01 = require('../images/products/product-6.jpg').default
const  product_06_image_02 = require('../images/products/product-6.webp').default

const  product_07_image_01 = require('../images/products/product-7.jpg').default
const  product_07_image_02 = require('../images/products/product-7.webp').default

const  product_08_image_01 = require('../images/products/product-8.jpg').default
const  product_08_image_02 = require('../images/products/product-8.webp').default

const  product_09_image_01 = require('../images/products/product-9.jpg').default
const  product_09_image_02 = require('../images/products/product-9.webp').default

const  product_10_image_01 = require('../images/products/product-10.jpg').default
const  product_10_image_02 = require('../images/products/product-10.webp').default

const  product_11_image_01 = require('../images/products/product-11.jpg').default
const  product_11_image_02 = require('../images/products/product-11.webp').default

const  product_12_image_01 = require('../images/products/product-12.jpg').default
const  product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "'Chasseur' jacket",
        price: "18900",
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "jackets-and-coats",
        colors: ["white", "grey", "black"],
        slug: "chasseur-jacket",
        size: ["l"],
        description: ""
    },
    {
        title: "Short jacket in lightweight wool gabardine ultra black",
        price: "23000",
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "jackets-and-coats",
        colors: ["white", "grey", "black"],
        slug: "short-jacket-in-lightweight-wool",
        size: [ "m", "l"],
        description: ""
    },
    {
        title: "CELINE T-Shirt in cotton",
        price: "9200",
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "t-shirts-and-sweatshirts",
        colors: ["white", "grey", "black"],
        slug: "celine-t-shirt-in-cotton",
        size: ["m", "l", "xl"],
        description: ""
    },
    {
        title: "Loose CELINE sweatshirt in cotton fleece",
        price: "22100",
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "t-shirts-and-sweatshirts",
        colors: ["white", "black", "pink"],
        slug: "loose-celine-sweatshirt-in-cotton-fleece",
        size: ["s", "m"],
        description: ""
    },
    {
        title: "Boxy biker jacket in plonge lambskin leather",
        price: "48100",
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "jackets-and-coats",
        colors: ["white", "grey", "black"],
        slug: "boxy-biker-jacket-in-plonge-lambskin-leather",
        size: ["s", "m", "l"],
        description: "BOXY BIKER JACKET WITH QUILTED SHOULDERS IN PLONGÉ LAMBSKIN LEATHER <br/> 100% LAMBSKIN <br/> 70% CUPRO 30% COTTON LINING<br/>LOOSE FIT<br/>CROPPED CUT<br/>4 ZIPPERED POCKETS<br/>QUILTED SHOULDERS<br/>CELINE-ENGRAVED SNAP BUTTONS<br/>ZIPPERED FRONT<br/>ADJUSTABLE TABS AT THE WAIST<br/>ZIPPERED CUFFS<br/>MADE IN ITALY<br/><br/>REFERENCE : 2E886413A.38NO"
    },
    {
        title: "Classic alluree jacket in mohair wool",
        price: "92100",
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "jackets-and-coats",
        colors: ["white", "grey", "black"],
        slug: "classic-alluree-jacket-in-mohair-wool",
        size: [ "l", "xl"]
    },
    {
        title: "Celine loose 16 sweatshirt in cotton and cashmere",
        price: "3200",
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "t-shirts-and-sweatshirts",
        colors: ["white", "black", "grey"],
        slug: "celine-loose-16-sweatshirt-in-cotton-and-cashmere",
        size: ["m", "l", "xl"]
    },
    {
        title: "Loose shirt in silk crepe",
        price: "9700",
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "shirts-and-blouses",
        colors: ["white", "grey", "black"],
        slug: "loose-shirt-in-silk-crepe",
        size: [ "m", "l"]
    },
    {
        title: "Striped sports bra",
        price: "9600",
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "knitwear",
        colors: ["white", "grey", "black"],
        slug: "striped-sports-bra",
        size: ["l"]
    },
    {
        title: "Tomboy shirt in striped oxford cotton",
        price: "9700",
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "shirts-and-blouses",
        colors: ["white", "grey", "black"],
        slug: "tomboy-shirt-in-striped-oxford-cotton",
        size: ["m", "l", "xl"]
    },
    {
        title: "Jude jacket in striped flannel",
        price: "9500",
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jackets-and-coats",
        colors: ["white", "grey", "black"],
        slug: "jude-jacket-in-striped-flannel",
        size: ["l", "xl"]
    },
    {
        title: "Oversized Fair Isle Wool-Jacquard Cardigan",
        price: "20100",
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "t-shirts-and-sweatshirts",
        colors: ["white", "grey", "black"],
        slug: "oversized-fair-isle-wool-jacquard-cardigan",
        size: [ "m", "l", "xl"]
    }
    
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsDetail = (cartItems) => {
    let res = []  
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            res.push({
                ...e,
                product: getProductBySlug(e.slug)
            })
        })
    }
    return res
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsDetail
}

export default productData