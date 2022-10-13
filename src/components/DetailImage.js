import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import styled from "styled-components";


const DetailImage = (props) => {
    const cloud = new Cloudinary({
        cloud: {
            cloudName: 'dmcoddd6m'
        }
    })
    const image = cloud.image(props.image)
    image.resize(fill().width(props.width || 500).height(props.height || 400))
    return (
        <Container>
            <AdvancedImage cldImg={image}></AdvancedImage>
        </Container>
    )
}

const Container = styled.div`
`

export default DetailImage;