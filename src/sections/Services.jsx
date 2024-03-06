import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section>
        <div className='flex flex-wrap justify-center gap-10'>
            {services.map((item)=>(
                <ServiceCard key={item.label} {...item}/>
            ))}
        </div>
      
    </section>
  )
}

export default Services
