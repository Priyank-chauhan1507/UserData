import React from 'react'


const Nav = () => {

  
  
  let Links =[
    {name:"Product",link:"/"},
    {name:"Download",link:"/"},
    {name:"Pricing",link:"/"},
    
  ];
  return (
    <div className='flex justify-between w-[90%] mx-auto h-[10%] items-center my-4 '>
      <h1 className=" hidden  md:block  font-bold text-2xl ">Navbar</h1>
      <ul className="flex justify-center text-xl space-x-5 ">
        {
          Links.map((e)=>(
<li key={e.name}> <a href ={e.link} className={`hover:text-gray-500  focus:after:w-[100%] after:absolute after:bg-[#ff3c78] after:h-[3px] after:w-0 after:left-0 after:bottom-[-1vh] relative  hover:after:duration-[0.4s]  hover:after:w-[100%]`}>{e.name}</a></li>
          ))
        }
       
        </ul>
      
      
    </div>
  )
}

export default Nav
