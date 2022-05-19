import React from 'react'

const Cards = (props) => {
    
  
 
 
  return (
    <div className={`flex flex-col border-2 hover:border-[#A259FF] shadow-md rounded-lg space-y-1 px-4 py-4 duration-300 bg-white`} >

      <div className="text-sm text-[#00000099] font-roboto">{props.gender} - {props.nat}</div>

      <div className="text-xl font-extrabold font-[roboto]">{props.nameTitle}. {props.firstName} {props.lastName}</div>
      <div className="font-[roboto] text-sm font-medium text-[#E16259]" >{props.email}</div>

    </div>
  )
}

export default Cards

