import styled from "styled-components"

export const Button = styled.button`
  background: ${props => props.primary ? "#346755" : "white"};
  color: ${props => props.primary ? "white" : "#346755"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #346755;
  border-radius: 3px;
  
  &:hover{
    border: 2px solid #1E3163
  }
`;