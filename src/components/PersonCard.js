import React,{useState , useEffect} from 'react'
import Cards from './Cards'
import { NavLink } from 'react-router-dom'
import {BrowserRouter as Router,
  Routes,
   Route,
  } from "react-router-dom" ; 
  import SelectedCard from './SelectedCard'
  
const PersonCard = () => {
  const [persondata, setPersonData] = useState([]);
  

  
  
  const updateData = async ()=>{
    const url ='https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20'
let data = await fetch(url);
 let parsedData = await data.json()
 setPersonData(parsedData.results)
  }

   useEffect(()=>{updateData();
},[]);

   

  return (
    <>
    <Router>
      <Routes>
    <Route path="/user/:title/:first/:last/:gender/:state/:country/:city/:streetNum/:postCode/:description/:offset" element={<SelectedCard/>}/>
    
    </Routes>
    <div className="  my-[4vw] w-[90vw] grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3  mx-auto gap-4 lg:grid lg:grid-cols-4 ">
      {  persondata && persondata.map((e,i)=>
       {return  <div key= {i}><NavLink to={"/user/"+ e.name.title +"/" +e.name.first +"/"+ e.name.last +"/"+e.gender +"/"+ e.location.state +"/"+ e.location.country + "/"+e.location.city +"/"+e.location.street.number +"/"+e.location.postcode + "/"+e.location.timezone.description +"/"+e.location.timezone.offset}

       style={({isActive})=>{return { backgroundColor : isActive? 'rgba(162, 89, 255, 1':'white'}}}>
         <Cards card={e} gender={e.gender} nat={e.nat} nameTitle={e.name.title}  firstName={e.name.first} lastName={e.name.last} email={e.email}/></NavLink> 
         </div>})}
      
      
    </div>
   
    </Router>
    </>
  )
}

export default PersonCard
