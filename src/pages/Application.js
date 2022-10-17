import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CuteButton from '../components/CuteButton';
import { showMessageWithTimeout } from '../store/appState/thunks';
import { selectToken } from '../store/user/selectors';
import styled from 'styled-components';
import { center, left } from '@cloudinary/url-gen/qualifiers/textAlignment';

export const Application = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken)
    const navigate = useNavigate();
    const { id } = useParams();
    const [hasOtherPets, setHasOtherPets] = useState(false)
    const [hasChildren, setHasChildren] = useState(false)
    const [hasYard, setHasYard] = useState(false)
    const [hasFreeTime, setHasFreeTime] = useState(false)
    const [canContact, setCanContact] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://localhost:4000/applications"
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const body = {
            hasOtherPets,
            hasChildren,
            hasYard,
            hasFreeTime,
            canContact,
            animalId: id,
        }
        try {
            const response = await axios.post(url, body, headers);

            if (response.status < 400) {
                dispatch(showMessageWithTimeout(
                    'success',
                    true,
                    "Thank you for your application! We will review it shortly. Redirecting you to the homepage...",
                    5000
                ));
                setTimeout(() => {
                    navigate("/")
                }, 5000);
            }
        }
        catch (e) {
            dispatch(showMessageWithTimeout(
                'warning',
                true,
                "We had an issue creating your application :( Please try again later.",
                5000
            ))
        }
    }


    return (
        <div>
          <Title> <p> Form for Adoption </p> </Title>
            <Center>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Do you have any other pets in the home?"
                        checked={hasOtherPets}
                        onChange={(e) => setHasOtherPets(e.target.value === 'false' ? false : true)}
                    />
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Do you have any children in the home?"
                        checked={hasChildren}
                        onChange={(e) => setHasChildren(e.target.value === 'false' ? false : true)}
                    />
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Do you have a yard?"
                        checked={hasYard}
                        onChange={(e) => setHasYard(e.target.value === 'false' ? false : true)}
                    />
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Do you have free time?"
                        checked={hasFreeTime}
                        onChange={(e) => setHasFreeTime(e.target.value === 'false' ? false : true)}
                    />
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Can we contact you regarding your application?"
                        checked={canContact}
                        onChange={(e) => setCanContact(e.target.value === 'false' ? false : true)}
                    />
                    {/* Had to add an empty function so that the cute button doesn't throw an error */}
                    <CuteButton style={{marginTop: '15px', marginLeft: '120px'}} type="submit" onClick={() => { }}> Submit! </CuteButton>
                </Form>
            </Center>
        </div>
    )
}

const Center = styled.div`
align-items: center;
display: flex;
justify-content: space-around;
`

const Title=styled.p`
text-align: center;
font-family: 'Amatic SC', cursive;
font-size: 30px;
color: #84B68B;
text-decoration: underline;
`
