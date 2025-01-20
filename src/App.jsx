import React from 'react'
import ResponsiveNav from './componenets/navbar'
import Banner from './componenets/banner'
import FlashProduct from './componenets/flashProduct'
import Categories from './componenets/categories'
import ProductShowcase from './componenets/product'
import Fooyer from './componenets/footer'


const App = () => {
  return (
    <>
    <ResponsiveNav/>
    <Banner/>
    <FlashProduct/>
    <Categories/>
    <ProductShowcase/>
    <Fooyer/>
      </>
  )
}

export default App