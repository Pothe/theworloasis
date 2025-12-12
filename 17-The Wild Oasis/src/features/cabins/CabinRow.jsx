import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteByid } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import ButtonGroup from "../../ui/ButtonGroup";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
padding-left:2px;
  display: block;
  width: 6.4rem;
  border-radius: 2px;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
const Button= styled.button`
outline-style: none;
border-radius: 5px;
border: none;
background-color: var(--color-red-700);
text-transform: uppercase;
color: var(--color-grey-0);
  
`

function CabinRow({cabin}) {
  const[showForm,setshowForm] = useState(false
  )
  const {id,image,name,regularPrice,discount,maxCapacity} = cabin;

  const queryClient = useQueryClient();

  const {isLoading:isDeleting, mutate }=useMutation({
    mutationFn:deleteByid,
    onSuccess:()=>{
      toast.success("Data has been successfull deleting ")
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError:(err)=>toast.error(err.message)
  })
  return (
    <>
    <TableRow>
      <Img src={image}/>
      <Cabin>{name}</Cabin>

     <div>Fit up tp {maxCapacity} guests</div>
           <Price>{ formatCurrency(regularPrice) }</Price>
            <Discount>{ formatCurrency(discount) }</Discount>
          <ButtonGroup>
             <Button onClick={()=>setshowForm((show)=>!show)}>Edit</Button>
          <Button disabled={isDeleting} onClick={()=>mutate(id)}>Delete</Button>
          </ButtonGroup>
          
    </TableRow>
    {showForm && <CreateCabinForm cabinEdit={cabin}/>}
  </>
  )
  
}

export default CabinRow


