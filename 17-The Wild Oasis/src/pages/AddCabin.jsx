import Button from "../ui/Button"
import Modal from '../ui/Modal'
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import CabinTable from "../features/cabins/CabinTable"

function AddCabin(){
    return <Modal>
        <Modal.Open opens="show-cabin-form">
            <Button>Add New</Button>
        </Modal.Open>
        <Modal.Window name="show-cabin-form">
            <CreateCabinForm/>
        </Modal.Window>

        <Modal.Open opens="table">
            <Button>show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
           <CabinTable/>
        </Modal.Window>
    </Modal>
}

// function AddCabin() {
//     const [isOpen, setisOpen] = useState(false)
//     return (
//         <div>
//             <Buttton bg="primary" size="small" onClick={()=>setisOpen(true)}>Add</Buttton>
//          {isOpen && <Modal onClose ={()=>setisOpen(false)}><CreateCabinForm onCloseModal={()=>setisOpen(false)}/></Modal>}
//         </div>
//     )
// }

export default AddCabin

