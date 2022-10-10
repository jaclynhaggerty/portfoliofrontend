import styled from "styled-components";
import footer from "../images/footer.png"


export default function Footer() {
    return (
      <Container>
        <img 
         src= {footer}
         alt="not found" 
         width="1584px"
         height="228px"
       />
      </Container>
    );
  }
  
  const Container = styled.div`
      background-color: #9fc5b0;
      display: flex;
      justify-content: center;
      overflow: hidden;
      margin-top: 50px;
  `