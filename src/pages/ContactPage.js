import { FaInstagramSquare, FaTwitter, FaFacebook } from "react-icons/fa";
import styled from "styled-components"


export const ContactPage = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Container>
                <h1 style={{textDecoration: "underline"}}> Contact Us: </h1>
                <p> Phone: +31 697959252 </p>
                <p> Email: cuddlycrittersadoption@gmail.com </p>
                <p> Mailing Address: Van Noordtstraat 26, 1013 SM Amsterdam, NL </p>
                <Icons> 
                <p><FaInstagramSquare/> 
                 <FaTwitter/>   
                 <FaFacebook/></p>
                 </Icons>
            </Container>
        </div>
    )
}

const Icons = styled.div`
font-size: 1.5em;
`

const Container = styled.div`
position: relative;
display: 'flex';
color: #4F6960 ;
`