import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import DetailImage from "../components/DetailImage"

export const DetailsPage = () => {
    const { id } = useParams()
    const [animal, setAnimal] = useState({})
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadAnimal = async () => {
            const url = `http://localhost:4000/animals/${id}`
            const response = await axios.get(url)
            setAnimal(response.data)
            setImages([response.data.mainImage, ...response.data.extraImages])
        }
        loadAnimal()
    }, [])

    return (
        <div>
            <OuterContainer>
                <Container>
                    {
                        !!images && images.map((img) => (
                            <DetailImage key={img} image={img}></DetailImage>
                        ))
                    }
                </Container>
                <Container>
                    <h1> {animal.name}</h1>
                    <p> {animal.description}</p>
                    <StyledButton> Apply To Adopt </StyledButton>
                </Container>
            </OuterContainer>
        </div>
    )
}

const StyledButton = styled.button`
margin-top: 10px;
margin-left: 550px;
margin-right: 550px;
margin-bottom: 20px;
height: 30px;
`

const OuterContainer = styled.div`
display: flex;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`