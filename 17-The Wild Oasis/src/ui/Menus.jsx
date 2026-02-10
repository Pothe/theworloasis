import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";
import { createPortal } from "react-dom";
import { useOutSideClick } from "../hooks/useOutSideClick";
import { CiLocationArrow1 } from "react-icons/ci";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext()
function Menus({children}) {
  const [openId,setopenId] = useState('')
  const [position,setposition]= useState(null) 
  const close = ()=>setopenId("")
  const open = setopenId

  return <MenusContext.Provider value={{openId,open,close,position,setposition}}>
    {children}

  </MenusContext.Provider>
}
function Toggle({id}){
  const {openId,close,open,setposition} = useContext(MenusContext)
  function HandleClick(e){
  const rect= e.target.closest("button").getBoundingClientRect()
  setposition({
    x:window.innerWidth - rect.width - rect.x,
    y:rect.y + rect.height + 8
  })


    openId === "" || openId !== id? open(id):close()
  }
  return <StyledToggle onClick={HandleClick}>
   <HiDotsVertical/>
  </StyledToggle>
}

function List({id,children}){   
  const{openId,position,close} = useContext(MenusContext)
     const ref = useOutSideClick(close) 
  if(openId !== id) return null;
  return createPortal(
    <StyledList position={position} ref={ref} >{children}</StyledList>
    ,document.body
  )  
}
function Button({icon,children,onClick}){   
  return (
  <li>
    <StyledButton onClick={onClick} ><span>{icon}</span>{children}</StyledButton>
  </li>
  )
}
Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button
export default Menus
