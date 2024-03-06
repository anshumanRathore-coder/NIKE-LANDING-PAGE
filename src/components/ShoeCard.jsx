import React from 'react'

export default function ShoeCard({imageURL, bigShoeImage,changeBigShoeImage}) {
    const handleClick=()=>{
        if(bigShoeImage!==imageURL){
            changeBigShoeImage(imageURL);
        }
    }
  return (
    <div className={` rounded-lg ${bigShoeImage===imageURL?"border-2  border-coral-red ":"border-transparent"} cursor-pointer max-sm:flex-1 `}
    onClick={handleClick}>
        <img src={imageURL} className='bg-contain object-contain bg-center bg-card rounded-lg ' height={127 } width={103} alt="shoe collection" />
    </div>
  )
}
