import React from 'react';
import {Card, Container,} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Login = () => {
    const user = useSelector((state) => {
        return state.auth;
    });

    return (<div>
        <Container className="d-flex justify-content-center">
            <Card style={{width: '50rem', marginTop: "7rem"}}>
                <Card.Body>
                    <p>Welcome {user.name} you can find your notes here <Link to={"/notes"}>Notes</Link></p>
                </Card.Body>
            </Card>
        </Container>
    </div>);
};

export default Login;