import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity"
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import CuteButton from "./CuteButton"

const AnimalCard = (props) => {
    const navigate = useNavigate()
    const cloud = new Cloudinary({
        cloud: {
            cloudName: "dmcoddd6m"
        }
    });

    console.log(props.animal)
    const mainImage = cloud.image(props.animal.mainImage);
    mainImage.resize(
        fill()
            .width(350)
            .height(350)
            .gravity(focusOn(FocusOn.face()))
    )

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/animals/${props.animal.id}`)
    }
    return (
        <Container>
            <Name> {props.animal.name}</Name>
            <AdvancedImage style={{ borderRadius: '8px', boxShadow: '1px 1px 1px 1px' }}
                cldImg={mainImage}></AdvancedImage>
            <CuteButton onClick={(e) => handleClick(e)} style={{ marginTop: '10px' }}> See More </CuteButton>
        </Container>
    )
}

const Name = styled.p`
font-family: 'Amatic SC', cursive;
font-size: 35px;
color: #84B68B;
text-decoration: underline;
`

const Container = styled.div`
    display: flex;
    max-width: 40vw;
    flex-direction: column;
`


export default AnimalCard