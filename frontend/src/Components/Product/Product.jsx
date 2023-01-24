import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import ProductTitle from './ProductTitle/ProductTitle'
import "./_Product.scss"
const Product = () => {
    return (
        <div className='productSection'>
            <div className="container-fluid">
                <ProductTitle />
                <ProductCard />
            </div>
        </div>
    )
}

export default Product
