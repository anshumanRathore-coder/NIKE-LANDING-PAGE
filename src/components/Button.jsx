import React from 'react'

export default function Button({label,imageURL}) {
  return (
    <button className='flex items-center justify-center text-white bg-coral-red gap-4 p-3 rounded-lg transition-colors hover:bg-red-300 '>
        {label}
        {imageURL&&<img className='rounded-full ' src={imageURL} alt="right-arrow" />}
    </button>
  )
}
