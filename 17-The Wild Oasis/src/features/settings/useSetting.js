import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useUpdateSetting(){

  const {isLoading:isSetting,error:isError,data:getDataSetting}=useQuery({
    queryKey:["setting"],
    queryFn:getSettings
 })
   
 return {isSetting,isError,getDataSetting}
}