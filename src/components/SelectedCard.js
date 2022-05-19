import React from 'react'
import { useParams } from 'react-router-dom'

const SelectedCard = () => {
 const { title,  first, last, gender, state, country, city , streetNum, postCode, description ,offset} = useParams();
  return (
    
    <div className='mx-auto items-center flex gap-x-10 flex-row relative justify-center  rounded-lg w-[60vw] h-[30vh] bg-white shadow-md '>

      <div className="relative"><img className="rounded-full mx-1" src= "https://randomuser.me/api/portraits/men/71.jpg" alt="not available"/></div>
      <div className="relative flex flex-col">
        <div className="font-bold md:text-4xl lg:text-6xl text-sm text-[#E16259] underline my-2">{title}.  {first} {last}</div>
        <div className="font-normal text-sm md:text-lg lg:text-xl "><span className="text-[#A259FF]">{streetNum}, </span>
        {city}, {state},   <span className="font-extrabold">{country}, </span>
        {postCode}</div>
        <div className="font-normal text-sm md:text-lg lg:text-xl"> {offset}, {description}</div>
        <div className="text-[#00000099] font-normal text-lg ">{gender}</div>
      </div>
      
    
     
    </div>
  )
}

export default SelectedCard;