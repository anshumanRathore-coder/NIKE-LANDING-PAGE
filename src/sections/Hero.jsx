import React, { useState } from 'react'
import {arrowRight} from '../assets/icons'
import Button from '../components/Button'
import { statistics,shoes } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
export default function Hero() {
    const [bigShoe,setBigShoe]=useState(bigShoe1)
  return (
    <section id='#hero' className='flex flex-col gap-2 lg:flex-row w-full lg:min-h-screen  border-red-600 max-container justify-center px-4 '>
        <div className='relative lg:w-2/5 flex flex-col  items-start w-full  max-lg:padding-x pt-28 gap-10'>
            <p className='font-mono text-coral-red text-xl font-bold '>Our Summer Collection</p>
            <h1 className='relative text-8xl max-md:text-[60px] '>
                <span className='lg:bg-white lg:whitespace-nowrap relative z-20 pr-10'>The New Arrival </span>
                <br />
                <span className='font-t text-coral-red'>Nike </span>
                <span className='lg:whitespace-nowrap relative z-20 pr-10'>Shoes</span>
            </h1>
            <p className='text-wrap text-gray-600 font-semibold'>Dicover stylist nike arrival quality comformt and innovation for your active life</p>
            <div className=''>
            <Button label="Shop Now" imageURL={arrowRight}/>
            </div>

            <div className='flex gap-10 '>
                {statistics.map((item)=>(
                    <div key={item.label}>
                 <p className='text-2xl font-sans font-bold' key={item.value}>{item.value}</p>
                 <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className=' relative flex-1  flex justify-center items-center bg-hero bg-cover bg-center lg:min-h-screen bg-primary max-lg:py-40'>
            <img height={510} width={610} className='object-contain relative z-10' src={bigShoe} alt="shoeImage" />

            <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]'>
                {shoes.map((item)=>(
                    <ShoeCard key={item.thumbnail} imageURL={item.thumbnail} bigShoeImage={bigShoe} changeBigShoeImage={(shoe)=>setBigShoe(shoe)}/>
                ))}
            </div>
        </div>
    </section>
  )
}
