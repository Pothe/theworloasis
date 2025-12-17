import { useState } from "react"
import Buttton from "../ui/Button"
import Modal from '../ui/Modal'
import CreateCabinForm from "../features/cabins/CreateCabinForm"
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

