import styled from "styled-components"

export const Homepage = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Container>
                <h1 style={{ textDecoration: "underline" }} >About Us</h1>
                <p>We are a non-profit organization dedicated to rescuing and rehabilitating animals of
                    all kinds. We provide affordable and quality veterinary care for our community, and are passionate about
                    animals and connecting them with their future forever families once they
                    are happy and healthy.</p>
            </Container>
        </div>
    )
}

const Container = styled.div`
position: relative;
display: 'flex';
`