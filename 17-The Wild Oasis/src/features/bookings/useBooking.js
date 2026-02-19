import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
export function useBooking(){
    const {data:Booking,error:hasError,isLoading}=useQuery({
        queryKey:["bookings"],
        queryFn:getBookings

    })
    return {Booking,hasError,isLoading}
}