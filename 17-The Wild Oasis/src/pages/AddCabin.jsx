import { useState } from "react"
import Buttton from "../ui/Button"
import Modal from '../ui/Modal'
import CreateCabinForm from "../features/cabins/CreateCabinForm"

// function AddCabin(){
//     return
//     <Modal>
//         <Modal.Open opens="cabin-form">
//             <Buttton>Add New</Buttton>
//         </Modal.Open>
//         <Modal.Window name="cabin-form">
//             <CreateCabinForm/>
//         </Modal.Window>

// {/* 
//          <Modal.Open opens="table">
//             <Buttton>Show Table</Buttton>
//         </Modal.Open>
//         <Modal.Window name="table">
//             <CreateCabinForm/>
//         </Modal.Window> */}
//     </Modal>

// }
function AddCabin() {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div>
            <Buttton bg="primary" size="small" onClick={()=>setisOpen(true)}>Add</Buttton>
         {isOpen && <Modal onClose ={()=>setisOpen(false)}><CreateCabinForm onCloseModal={()=>setisOpen(false)}/></Modal>}
        </div>
    )
}

export default AddCabin

