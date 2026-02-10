import { useEffect, useRef} from "react"

export function useOutSideClick(handle,listentCapturing=true) {
     const ref =useRef()
      useEffect(function(){
      function handleClick(e){ 
        // Click inside the menu → keep open

         if (ref.current?.contains(e.target)) return;


           // Click on input / textarea / select → keep open
          if (
        e.target.closest(
          "input, textarea, select, [contenteditable='true'],button"
        )
      )
        return;
       
         if(ref.current && !ref.current.contains(e.target)){       
           handle()   
        }   
      }

      document.addEventListener("click",handleClick,listentCapturing)
      return ()=>document.removeEventListener("click",handleClick,listentCapturing)    
    },[handle])   
    
    return ref
}


