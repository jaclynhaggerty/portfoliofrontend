import styled from "styled-components";
import banner from "../images/banner.png"


export default function Header() {
  return (
    <Container>
      <img 
       src= {banner}
       alt="not found" 
       width="1584px"
       height="278px"
     />
    </Container>
  );
}

const Container = styled.div`
    background-color: #eee4da;
    display: flex;
    justify-content: center;
    overflow: hidden;
`