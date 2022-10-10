import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components";
import { selectToken } from "../store/user/selectors"


export const AdminReview = () => {
    const baseUrl = 'http://localhost:4000/applications'
    const token = useSelector(selectToken);
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const [apps, setApps] = useState([]);

    const handleClick = async (appId) => {
        const url = baseUrl + `/${appId}`
        const updates = { approved: true }
        const response = await axios.put(url, updates, headers);
        if (response.status < 400) {
            const appIndex = apps.findIndex(app => app.id === appId);
            apps[appIndex].approved = true;
            setApps(apps);
        }
    }

    useEffect(() => {
        const loadApplications = async () => {
            const response = await axios.get(baseUrl, headers);
            setApps(response.data);
        }
        loadApplications();
    }, []);

    return (
        <Container>
            {apps.map(app => (
                <div key={app.id}>
                    <h2>Application for {app.animal.name} by {app.user.name}</h2>
                    <p>Email: {app.user.email}</p>
                    {app.approved ? 
                        <button disabled>Approved</button> : 
                        <button onClick={(e) => handleClick(app.id)}>Approve?</button>}
                </div>
            ))}
        </Container>
    )
}

const Container = styled.div`

`