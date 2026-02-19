import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBooking(){
    const [searchParams]= useSearchParams()
    const fillterValue = searchParams.get("status")
    console.log("useBooking",fillterValue)
    const {data:Booking,error:hasError,isLoading}=useQuery({
        queryKey:["bookings"],
        queryFn:getBookings

    })
    return {Booking,hasError,isLoading}
}