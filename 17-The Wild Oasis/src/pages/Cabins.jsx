
// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Cabintable from '../features/cabins/CabinTable'
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";



function Cabins() {
  const [formOpen,setformOpen] = useState(false)

// useEffect(()=>{
//   getCabin().then((data)=>console.log(data))
// },[])


  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Fiter / sort</p>

    </Row>
    <Row>
    <Cabintable/>
    <Button bg='primary' size='medium' onClick={()=>setformOpen(show=>!show)}>Add new</Button>
    {formOpen && <CreateCabinForm/>}
    </Row>
     </>
  );
}

export default Cabins;
