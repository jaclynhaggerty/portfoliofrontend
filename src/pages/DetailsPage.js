import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import CuteButton from "../components/CuteButton"
import DetailImage from "../components/DetailImage"
import Carousel from "react-bootstrap/Carousel"
import { useDispatch, useSelector } from "react-redux"
import { showMessageWithTimeout } from "../store/appState/thunks"
import { selectToken } from "../store/user/selectors"


export const DetailsPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const [animal, setAnimal] = useState({})
    const [images, setImages] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        if (token) {
            navigate(`/apply/${id}`)
        }
        else {
            dispatch(showMessageWithTimeout(
                'info',
                true,
                "You must be registered to apply for adoption. Please login or create an account.",
                8000
            ));
        }
    }

    useEffect(() => {
        const loadAnimal = async () => {
            const url = `http://localhost:4000/animals/${id}`
            const response = await axios.get(url)
            setAnimal(response.data)
            setImages([response.data.mainImage, ...response.data.extraImages])
        }
        loadAnimal()
    }, []);


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
                    <CuteButton onClick={handleClick} style={{ display: "inline-flex" }}>Adopt!</CuteButton>
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
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 40px 40px 0 40px;
`