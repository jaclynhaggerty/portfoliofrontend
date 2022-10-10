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
                <p><FaInstagramSquare fontSize="1.5em"/> 
                 <FaTwitter fontSize="1.5em"/>   
                 <FaFacebook fontSize="1.5em" /></p>
            </Container>
        </div>
    )
}

const Container = styled.div`
position: relative;
display: 'flex';
color: #4F6960 ;
`