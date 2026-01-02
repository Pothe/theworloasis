import { useEffect, useRef} from "react"

export function useOutSideClick(handle,listentCapturing=true) {
     const ref =useRef()
      useEffect(function(){
      function handleClick(e){
        if(ref.current && !ref.current.contains(e.target)){
          console.log("Click outsides")
         handle()   
         } 
      }

      document.addEventListener("click",handleClick,listentCapturing)
      return ()=>document.removeEventListener("click",handleClick,listentCapturing)    
    },[handle])   
    
    return ref
}


