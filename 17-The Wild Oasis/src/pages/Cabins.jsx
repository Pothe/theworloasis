
// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Cabintable from '../features/cabins/CabinTable'
import AddCabin from "./AddCabin";
import CabinTalbeoperation from "../features/cabins/CabinTalbeoperation";



function Cabins() {


// useEffect(()=>{
//   getCabin().then((data)=>console.log(data))
// },[])


  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <Row type="horizontal"><CabinTalbeoperation/>
      
     
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
