import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting } from "../../services/apiSettings"
import toast from "react-hot-toast"

export function useEditSetting(){
    const queryClient = useQueryClient()

   const {isLoading:isUpdateLoading, mutate:isSettingUpdated} = useMutation({
    mutationFn:updateSetting,
    onSuccess:()=>{
        toast.success("success update")
        queryClient.invalidateQueries({queryKey:['setting']})
    },
   onError:(err)=>{
    toast.error(err.message)
   }
   })
    return {isUpdateLoading,isSettingUpdated}
}