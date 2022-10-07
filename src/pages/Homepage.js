import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import AnimalCard from "../components/AnimalCard"

export const Homepage = () => {
    const [animals, setAnimals] = useState([])
    useEffect(() => {
        const loadAllAnimals = async () => {
            const url = "http://localhost:4000/animals"
            const response = await axios.get(url)
            setAnimals(response.data)
        }
        loadAllAnimals()
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <Container>
                <h1 style={{ textDecoration: "underline" }} >About Us</h1>
                <p>We are a non-profit organization dedicated to rescuing and rehabilitating animals of
                    all kinds. We provide affordable and quality veterinary care for our community, and are passionate about
                    animals and connecting them with their future forever families once they
                    are happy and healthy.</p>

                <CardContainer>
                    {animals.map((animal) => {
                        return (
                            <AnimalCard key={animal.id} animal={animal}> </AnimalCard>
                        )
                    })}
                </CardContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
position: relative;
display: 'flex';
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
`