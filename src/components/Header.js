import styled from "styled-components";


export default function Header() {
  return (
    <Container>
      <img 
       src= "https://www.clintmooreanimalhospital.com/wp-content/uploads/2016/11/animals-1024x398-1-1024x576.png"
       alt="not found" 
       width="800px"
       height="300px"
     />
    </Container>
  );
}

const Container = styled.div`
    background-color: #eee;
    display: flex;
    justify-content: center;
`