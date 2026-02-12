import Filter from "../../ui/Filter"
import TableOperations from "../../ui/TableOperations"
import Sortby from "./Sortby"


function CabinTalbeoperation() {
    return (
     <TableOperations>
       <Filter filtervalue={"discount"} options={[

{value:"all", label:"all"},
{value:"discount", label:"discount"},
{value:"no-discount", label:"no-discount"}
       ]}/>
       <Sortby options={[
        {value:"",label:"sorted by A-z"},
         {value:"",label:"sorted by Z-A"},
          {value:"",label:"sorted by Number"},
        ]}/>
     </TableOperations>
    )
}

export default CabinTalbeoperation
