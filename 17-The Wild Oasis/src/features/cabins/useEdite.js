import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function EditCabin(){
 const queryClient =useQueryClient()

    const{isLoading:isEditing,mutate:isupdateCabin} = useMutation({
    mutationFn:({newDataCabin,id})=>createEditCabin(newDataCabin,id),      
    onSuccess:()=>{
       toast.success(` data has been updated successfull `)
      // refresh after insert data successfull
      queryClient.invalidateQueries({queryKey:["cabins"]})      // 
 
    },
    onError:(err)=>{
      toast.error(err.message)
    
    }
    
  })
    
    return {isEditing,isupdateCabin}
}