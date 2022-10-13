import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import DetailImage from "../components/DetailImage"
import CuteButton from "../components/CuteButton"


export const ProductsPage = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        const loadProducts = async () => {
            const url = "http://localhost:4000/products"
            const response = await axios.get(url)
            setProducts(response.data)
        }
        loadProducts();
    })
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <DetailImage width={300} height={300} image={product.mainImage}> </DetailImage>
                    <h1> {product.title} </h1>
                    <p> {product.price} </p>
                    <CuteButton> Add to cart </CuteButton>

                </div>
            ))}
        </div>
    )
}

