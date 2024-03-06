import React from 'react'
// import {shoe4,shoe5,shoe6,shoe7} from '../assets/images'
import { star } from '../assets/icons'
const ProductsCard = ({imgURL,name,price}) => {
  return (
    <div className=' flex flex-col mt-10 space-y-3'>
        <img src={imgURL} alt={name} />
        <div className='flex gap-2'>
        <img src={star} alt="start" />
        (4.5)
        </div>
        <h1 className='font-palanquin font-semibold text-2xl '>{name}</h1>
        <p className='text-coral-red'>{price}</p>
    </div>
  )
}

export default ProductsCard
