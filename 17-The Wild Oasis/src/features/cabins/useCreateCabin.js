import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function createCabin(){
  const queryClient = useQueryClient()
      const{isLoading:isCreating,mutate:iscreateCabin} = useMutation({
        mutationFn:createEditCabin,
        onSuccess:()=>{
          toast.success("One Data has been added successful!")
          // refresh after insert data successfull
         queryClient.invalidateQueries({queryKey:["cabins"]}) 
        },
        onError:(err)=>{
          toast.error(err.message)
        }
      })
    
    return{isCreating,iscreateCabin}
}