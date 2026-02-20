import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBooking(){
    const [searchParams]= useSearchParams()
    // filter 
    const fillterValue = searchParams.get("status")
    const filter = !fillterValue || fillterValue==="all"?null:{field:"status",value: fillterValue}
  
  
    const {data:Booking,isLoading}=useQuery({
        queryKey:["bookings",filter],
        queryFn: ()=>getBookings({filter})

    })
    return {Booking,isLoading}
}