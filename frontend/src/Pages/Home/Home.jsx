import React from 'react'
import Best from '../../Components/BestSeller/Best'
import Header from '../../Components/Header/Header'
import News from '../../Components/News/News'
import Product from '../../Components/Product/Product'
import Sale from '../../Components/Sale/Sale'

const Home = () => {
  return (
    <div>
      <Header />
      <Product/>
      <Sale />
      <Best />
      <News />
    </div>
  )
}

export default Home