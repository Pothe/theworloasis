import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBooking(){
    const [searchParams]= useSearchParams()
    // filter 
    const fillterValue = searchParams.get("status")
    const filter = !fillterValue || fillterValue==="all"?null:
     {field:"status",value: fillterValue} 
    //{field:"totalPrice",value: 5000,method:"gte"}  
  
    const {data:Booking,isLoading}=useQuery({
        // filter is independency , it refresh when update value
        queryKey:["bookings",filter],
        queryFn: ()=>getBookings({filter})

    })
    return {Booking,isLoading}
}