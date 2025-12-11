import styled, { css } from "styled-components";

const Row = styled.div`
    display: flex;   
  
    padding: 0px 3px 0px 3px;
    ${props=>props.type==="horizontal" && css`
     justify-content: space-between;
     align-items: center; 
     `}
     ${props=>props.type==="vertical" && css`
        flex-direction: column;
        gap: 1.5px;
    `}
`
Row.defaultProps={
    type:"vertical"
}
export default Row