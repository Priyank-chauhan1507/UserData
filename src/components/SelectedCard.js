import React from 'react'
import { useParams } from 'react-router-dom'

const SelectedCard = () => {
 const { img ,title, first, last, streetNum, streetName, city, state, country, postcode, description, gender } = useParams();
  return (
    
    <div className='mx-auto items-center flex gap-x-10 flex-row relative justify-center  rounded-lg w-[60vw] h-[30vh] bg-white shadow-md '>

      <div className="relative"><img className="rounded-full" src= {img} alt="not available"/></div>
      <div className="relative flex flex-col">
        <div className="font-bold text-6xl text-[#E16259] underline my-2">{title}. {first} {last} </div>
        <div className="font-normal text-xl"><span className="text-[#A259FF]">{streetNum}, </span>
        {streetName}, {city}, {state}, <span className="font-extrabold">{country}, </span>
        {postcode}</div>
        <div className="font-normal text-xl">{description}</div>
        <div className="text-[#00000099] font-normal text-lg ">{gender}</div>
      </div>
      
    
     
    </div>
  )
}

export default SelectedCard;