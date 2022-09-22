import React from 'react';
import {Button, Card, Container, Form,} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {togleRegister} from "../redux/registerSlice";

const Login = () => {
    const dispatch = useDispatch();
    let handleRegister = () => {
        dispatch(togleRegister({chosen: 1}))
    }


    return (<div>
        <Container className="d-flex justify-content-center">
            <Card style={{width: '50rem', marginTop: "7rem"}}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter a user name"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Text className="text-muted">
                                    Dont have an Account ?
                                </Form.Text>
                                <a style={{marginLeft: '1rem'}} onClick={handleRegister}>register</a>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>);
};

export default Login;