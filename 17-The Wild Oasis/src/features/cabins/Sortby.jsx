import { useSearchParams } from "react-router-dom"
import Select from "../../ui/Select"



function Sortby({options}) {
    const [searchParams,setSearchParams] = useSearchParams()

    function handleClick(e){
        searchParams.set("sortBy", e.target.value)
        setSearchParams(searchParams)


    }
    return (
        <Select options={options} type="white" onChanged={handleClick}/>
    )
}

export default Sortby
