import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import CuteButton from "../components/CuteButton"
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const ProductImage = (props) => {
    const cloud = new Cloudinary({
        cloud: {
            cloudName: 'dmcoddd6m'
        }
    })
    const image = cloud.image(props.image)
    return (
        <Image cldImg={image}></Image>
    )
}

const Image = styled(AdvancedImage)`
    width: 300px;
    height: 300px;
`
export const ProductsPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const loadProducts = async () => {
            const url = "https://cuddlycritters.herokuapp.com/products"
            const response = await axios.get(url)
            setProducts(response.data)
        }
        loadProducts();
    }, [])

    return (
        <div>
            <Title><h1> -Shop- </h1> </Title>
            <GridContainer>
                {products.map((product) => (
                    <Container key={product.id}>
                        <ImageContainer>
                            <ProductImage image={product.mainImage}> </ProductImage>
                        </ImageContainer>
                        <DetailContainer>
                      <Name> <h1> {product.title} </h1> </Name>
                            <p> €{product.price} </p>
                            <CuteButton style={{ display: "inline-flex" }}> Add to cart </CuteButton>
                        </DetailContainer>
                    </Container>
                ))}
            </GridContainer>
        </div>
    )
}

const Title= styled.h1`
text-align: center;
font-family: 'Amatic SC', cursive;
color: #84B68B;
`

const Name = styled.h1`
font-family: 'Amatic SC', cursive;
`

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Container = styled.div`
display: flex;
box-shadow: 1px 1px 1px 1px #ccc;
margin: 20px 10px;
width: 350px;
flex-direction: column;
`
const ImageContainer = styled.div`
margin-bottom: 40px;
margin-left: auto;
margin-right: auto;
margin-top: 40px;
align-items: center;
`

const DetailContainer = styled.div`
margin-top: auto;
margin-left: 0px;
margin-right: 20px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`
