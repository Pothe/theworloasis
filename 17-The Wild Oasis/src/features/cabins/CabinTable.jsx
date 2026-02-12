


import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow'
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;



function CabinTable() {  

  const [searchParams] = useSearchParams()

    const {isLoading,cabins}= useCabins()  

    const FilterValue = searchParams.get("discount") || "all"
    let FilteredCabin;
    if(FilterValue ==="all") FilteredCabin= cabins

    if(FilterValue==="discount") FilteredCabin = cabins.filter((cabin)=>cabin.discount>0)

    if(FilterValue==="no-discount") FilteredCabin = cabins.filter((cabin)=>cabin.discount===0)
  
 if(isLoading) return <Spinner/>
 
  return (
    <Menus>
   <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
    <Table.Header role="row">
 <div></div>
      <div>Cabins</div>
      <div>capicty</div>
       <div>price</div>
        <div>discount</div>
        <div></div>
    </Table.Header>
    <Table.Body data={FilteredCabin} render={(cabins)=><CabinRow cabin={cabins} key={cabins.id}/>}/>   
   </Table>
   </Menus>
  )
}

export default CabinTable
