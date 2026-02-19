import styled from "styled-components"
import Logo from './Logo'
import MainNav from './MainNav'
import Uploader from "../data/Uploader"

const StyleSidebar = styled.aside`
    background-color:var(--color-grey-0);
    padding: 3rem 1.2rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`
function Sidebar() {
    return (
        <StyleSidebar>
          <Logo/>
          <MainNav/>
        <Uploader/>
        </StyleSidebar>
    )
}

export default Sidebar
