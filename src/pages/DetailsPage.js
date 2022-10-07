import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


export const DetailsPage = () => {
    const { id } = useParams()
    const [animal, setAnimal] = useState ({})
    const [mainImage, setMainImage] = useState('');
    const [extraImages, setExtraImages] = useState([]);

    const cloud = new Cloudinary({
        cloud: {
            cloudName: 'dmcoddd6m'
        }
    });

    useEffect(() => {
        const loadAnimal = async () => {
            const url = `http://localhost:4000/animals/${id}`
            const response = await axios.get(url)
            setAnimal (response.data)
            setMainImage(cloud.image(response.data.mainImage));
            setExtraImages(response.data.extraImages.map((image) => cloud.image(image)));
        }
        loadAnimal()
    }, [])

    return (
        <div>
            <OuterContainer>
                <Container>
                    { !!mainImage && <AdvancedImage cldImg={mainImage}></AdvancedImage> }
                    {
                        !!extraImages && extraImages.map((img) => (
                            <AdvancedImage key={img} cldImg={img}></AdvancedImage>
                        ))
                    }
                </Container>
                <Container>
        <h1> {animal.name}</h1>

        <p> {animal.description}</p>
        <button> Apply To Adopt </button>
                </Container>
            </OuterContainer>
        </div>
    )
}

const OuterContainer = styled.div`
display: flex;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`