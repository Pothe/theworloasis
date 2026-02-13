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
        {value:"name-asc",label:"sorted by A-z"},
         {value:"name-desc",label:"sorted by Z-A"},
         {value:"regularPrice-asc",label:"sorted by price(low first)"},
         
           {value:"regularPrice-desc",label:"sorted by Regular Price(Z-A)"},
            {value:"maxCapacity-asc",label:"sorted by Price(A-Z)"},
              {value:"maxCapacity-dessc",label:"sorted by MaxCapacity(Z-A)"}
        ]}/>
     </TableOperations>
    )
}

export default CabinTalbeoperation
