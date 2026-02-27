import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";
export function useBookings(){
  const queryClient = useQueryClient()
    const [searchParams]= useSearchParams()
    // filter 
    const fillterValue = searchParams.get("status")
    const filter = !fillterValue || fillterValue==="all"?null:
     {field:"status",value: fillterValue} 
    //{field:"totalPrice",value: 5000,method:"gte"}  

    const sortByRaw = searchParams.get("sortBy") || "startDate-desc"
    const[field,direction ]= sortByRaw.split("-")
    const sortBy ={field,direction}
    
    // pagination
     const page = Number(searchParams.get("page"))
     // query 
    const {data:{data:Booking,count} ={},isLoading}=useQuery({
        // filter is independency , it refresh when update value
        queryKey:["bookings",filter,sortBy,page],
        queryFn: ()=>getBookings({filter,sortBy,page}),
   
    })
 

    // pre-fetching

    const PageCount = Math.ceil(count/PAGE_SIZE)


    if(page < PageCount)
    queryClient.prefetchQuery({
        queryKey:["bookings",filter,sortBy,page +1],
        queryFn: ()=>getBookings({filter,sortBy,page:page+1}),
    })

    if(Number(page)>1)


    queryClient.prefetchQuery({
        queryKey:["bookings",filter,sortBy,page -1],
        queryFn: ()=>getBookings({filter,sortBy,page:page-1}),
    })
     
  return {isLoading,Booking,count};
}