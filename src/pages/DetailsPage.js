import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const DetailsPage = () => {
    const { id } = useParams()
    const [animal, setAnimal] = useState ({})
    useEffect(() => {
        const loadAnimal = async () => {
            const url = `http://localhost:4000/animals/${id}`
            const response = await axios.get(url)
            setAnimal (response.data)
        }
        loadAnimal()
    })
    return (
        <div>
        <h1> {animal.name}</h1>
        <p> {animal.description}</p>
        </div>
    )
}