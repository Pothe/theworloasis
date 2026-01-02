
// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Cabintable from '../features/cabins/CabinTable'
import AddCabin from "./AddCabin";



function Cabins() {


// useEffect(()=>{
//   getCabin().then((data)=>console.log(data))
// },[])


  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <Row type="horizontal"> <p>Fiter / sort</p>
      
     
      </Row>   
        
    </Row>
    <Row>
    <Cabintable/>  
     </Row>
      <AddCabin/>
     
     </>
  );
}

export default Cabins;
