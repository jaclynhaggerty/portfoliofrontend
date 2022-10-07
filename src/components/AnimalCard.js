import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity"
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";


const AnimalCard = (props) => {
const navigate = useNavigate()

const cloud = new Cloudinary({
    cloud: {
        cloudName: "dmcoddd6m"
    }
});

console.log(props.animal)
const mainImage = cloud.image(props.animal.mainImage);

mainImage.resize(fill().width(350).height(350).gravity(focusOn(FocusOn.face())))

const handleClick = (e) => {
    e.preventDefault()
    navigate(`/animals/${props.animal.id}`)
}

    return (
        <Container>
            <p> {props.animal.name}</p>
            <AdvancedImage cldImg={mainImage}></AdvancedImage>
            <StyledButton onClick= {(e) => handleClick(e)}> See More </StyledButton> 
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    max-width: 40vw;
    flex-direction: column;
`

const StyledButton = styled.button`

`




export default AnimalCard