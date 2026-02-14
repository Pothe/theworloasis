import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
export function useBooking(){
    const {data:Bookings,error:hasError,isLoading}=useQuery({
        queryKey:["bookings"],
        queryFn:getBookings

    })
    return {Bookings,hasError,isLoading}
}