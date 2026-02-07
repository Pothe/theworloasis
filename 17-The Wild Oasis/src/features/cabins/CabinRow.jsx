import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteByid } from "../../services/apiCabins";
// import toast from "react-hot-toast";

import CreateCabinForm from "./CreateCabinForm";
import ButtonGroup from "../../ui/ButtonGroup";
import { useDeleteCabins } from "./useDelete";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { createCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";



// const //TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
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
  font-family: "Battambang", system-ui;
  font-weight: 500;
  font-style: normal
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
border: none;
text-transform: uppercase;  
`

function CabinRow({cabin}) {
   const {isDeleting,deleteCabinItem}= useDeleteCabins()
   const {isCreating,iscreateCabin}=createCabin()

  const {id:cabinId,image,name,regularPrice,discount,maxCapacity,description} = cabin;


  function handleDublic(){
    iscreateCabin({
      name:`copy of ${name}`,
      maxCapacity,image,regularPrice,discount,description
    })
  }
  

  return (
  

    <Table.Row>
      <Img src={image}/>
      <Cabin>{name}</Cabin>

     <div>Fit up tp {maxCapacity} guests</div>
           <Price>{ formatCurrency(regularPrice) }</Price>
            <Discount>{ discount ==0?"-": formatCurrency(discount) }</Discount>
          <ButtonGroup>
             <Button disabled={isCreating} onClick={handleDublic} ><IoCopyOutline/></Button>

             <Modal>
             <Modal.Open opens="edit">
               <Button ><FaEdit /></Button>
             </Modal.Open>
             <Modal.Window name="edit">
             <CreateCabinForm cabinEdit={cabin}/>
             </Modal.Window>
                
             <Modal.Open opens="confirmDelete" >
          <Button> <MdOutlineDelete/></Button>
          </Modal.Open>
          <Modal.Window name="confirmDelete">
          <ConfirmDelete onConfirm={()=>deleteCabinItem(cabinId)} disabled={isDeleting} resourceName="This cabin"/>
          </Modal.Window>
           </Modal> 
           <Menus.Menu>
           <Menus.Toggle id={cabinId}/>
           <Menus.List id={cabinId}>
           <Menus.Button icon={<FaEdit />} onClick={handleDublic}>Duplicate</Menus.Button>
            <Menus.Button>Edit</Menus.Button>
             <Menus.Button>Delete</Menus.Button>
           </Menus.List>

           </Menus.Menu>
          </ButtonGroup>
          
    </Table.Row> 

  )
  
}

export default CabinRow


