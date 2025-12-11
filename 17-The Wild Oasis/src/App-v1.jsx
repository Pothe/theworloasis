
import GobalStyles from "./styles/GlobalStyle"
import Buttton from "./ui/Button"
import Heading from "./ui/Heading"
import Input from "./ui/Input"
import Row from "./ui/Row"
import StyleApp from "./ui/StyledApp"




function App() {

  return (
   <>
    <GobalStyles/>
     <StyleApp>
      <Row type="hotizontal">
     <Heading type="small">The Wild oasis </Heading> 
    <Buttton type="sm">Chech in</Buttton>
    <Buttton type="md">Chech out</Buttton>
        
    <Buttton type="lg">large Button</Buttton>
    </Row>
      <Row type="vertical">
     <Heading type="small">The Wild oasis </Heading> 
    <Buttton size='small' bg='secondary'>Chech in</Buttton>
    <Buttton size="medium" bg="primary">Chech out</Buttton>        
    <Buttton type="lg">large Button</Buttton>
    </Row>
    
    <div><Input/><Input/></div>
     <Heading type="big">Form</Heading>
    </StyleApp>
  </>
  )
}

export default App
