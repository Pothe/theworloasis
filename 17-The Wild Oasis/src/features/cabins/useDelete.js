import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteByid } from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useDeleteCabins(){
 const queryClient = useQueryClient();

  const {isLoading:isDeleting, mutate:deleteCabinItem }=useMutation({
    mutationFn:deleteByid,
    onSuccess:()=>{
      toast.success("Data has been successfull deleting ")
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError:(err)=>toast.error(err.message)
  })

    return{isDeleting,deleteCabinItem}
}