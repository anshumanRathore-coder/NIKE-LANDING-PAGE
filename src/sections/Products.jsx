import React from 'react'
import { products } from '../constants'
import ProductsCard from '../components/ProductsCard'
const Products = () => {
  return (
    <section id='products'>
      <div className='flex flex-col justify-center items-start px-2'>
        <h1 className='text-4xl font-montserrat font-bold'>
          Our<span className='text-coral-red'> Popular </span>Products
        </h1>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-10'>
          {products.map((item)=>(
            <ProductsCard key={item.name} {...item}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
