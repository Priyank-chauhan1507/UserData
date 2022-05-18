import React from 'react'
import { useLocation } from 'react-router-dom'
const Cards = (props) => {
    
  let locator = useLocation();
 
 
  return (
    <div className={`flex flex-col ${locator.pathName==="/user/:img/:title/:first/:last/:streetNum/:streetName/:city/:state/:country/:postcode/:description/:gender"?"bg-[#A259FF]":"bg-white"}   border-2 hover:border-[#A259FF] shadow-md rounded-lg space-y-1 px-4 py-4 duration-300`} >

      <div className="text-sm text-[#00000099] font-roboto">{props.gender} - {props.nat}</div>

      <div className="text-xl font-extrabold font-[roboto]">{props.nameTitle}. {props.firstName} {props.lastName}</div>
      <div className="font-[roboto] text-sm font-medium text-[#E16259]" >{props.email}</div>

    </div>
  )
}

export default Cards
