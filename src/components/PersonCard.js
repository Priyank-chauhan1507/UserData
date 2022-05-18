import React,{useState , useEffect} from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router,
  Switch,
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
    <Route path="/user/:img/:title/:first/:last/:streetNum/:streetName/:city/:state/:country/:postcode/:description/:gender"><SelectedCard/></Route>
    <div className="  my-[4vw] w-[90vw] grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3  mx-auto gap-4 lg:grid lg:grid-cols-4 ">
      {  persondata && persondata.map((e,i)=>
       {return  <div key= {i}><Link to={"/user/"+e.picture.large +"/" +e.name.title+"/"+e.name.first+"/"+e.name.last+"/"+"/"+e.location.street.number+"/"+e.location.street.name+"/"+e.location.city+"/"+e.location.state+"/"+e.location.country+"/"+e.location.postcode+"/"+e.location.timezone.description +"/"+e.gender}>
         <Cards card={e} gender={e.gender} nat={e.nat} nameTitle={e.name.title}  firstName={e.name.first} lastName={e.name.last} email={e.email}/></Link> 
         </div>})}
      
      
    </div>
    
    </Router>
    </>
  )
}

export default PersonCard
