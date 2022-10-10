import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import CuteButton from "../components/CuteButton"
import DetailImage from "../components/DetailImage"
import Carousel from "react-bootstrap/Carousel"


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
                    <Carousel>
                        {
                            !!images && images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <DetailImage image={image}></DetailImage>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                    {/* {
                        !!images && images.map((img) => (
                            <DetailImage key={img} image={img}></DetailImage>
                        ))
                    } */}
                </Container>
                <Container>
                    <Name> {animal.name}</Name>
                    <p> {animal.description}</p>
                    <CuteButton style={{ display: "inline-flex" }}>Adopt!</CuteButton>
                </Container>
            </OuterContainer>
        </div>
    )
}


const Name = styled.h1`
    text-align: center;
`

const OuterContainer = styled.div`
display: flex;
padding: 20px;
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
`