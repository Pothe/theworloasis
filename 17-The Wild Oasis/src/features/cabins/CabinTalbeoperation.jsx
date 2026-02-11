import Filter from "../../ui/Filter"
import TableOperations from "../../ui/TableOperations"


function CabinTalbeoperation() {
    return (
     <TableOperations>
       <Filter filtervalue={"discount"} options={[

{value:"all", label:"all"},
{value:"discount", label:"discount"},
{value:"no-discount", label:"no-discount"}
       ]}/>
     </TableOperations>
    )
}

export default CabinTalbeoperation
