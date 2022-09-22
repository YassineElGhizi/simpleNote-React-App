import React, {useState} from 'react';
import {Alert, Button, Card, Container, Form,} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {togleRegister} from "../redux/registerSlice";

const Register = () => {
    const dispatch = useDispatch();
    let handleLogin = () => {
        dispatch(togleRegister({chosen: -1}))
    }

    const [register, setRegister] = useState({'name': '', 'password': '', 'confirmPassword': ''});

    let handleChange = (choice, e) => {
        switch (choice) {
            case 1:
                setRegister((prevState) => {
                    let user = Object.assign({}, prevState)
                    user.name = e.target.value
                    return user
                })
                break
            case 2:
                setRegister((prevState) => {
                    let user = Object.assign({}, prevState)
                    user.password = e.target.value
                    return user
                })
                break
            case 3:
                setRegister((prevState) => {
                    let user = Object.assign({}, prevState)
                    user.confirmPassword = e.target.value
                    return user
                })
                break
            default:
                console.log("Default")
                break
        }
    }

    return (<div>
        <Container className="d-flex justify-content-center">
            <Card style={{width: '50rem', marginTop: "7rem"}}>
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter a user name" value={register.name}
                                          onChange={(e) => handleChange(1, e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={register.password}
                                          onChange={(e) => {
                                              handleChange(2, e)
                                          }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={register.confirmPassword}
                                          onChange={(e) => {
                                              handleChange(3, e)
                                          }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {register.password === register.confirmPassword ? '' :
                                <Alert variant="danger">Password docent match</Alert>}

                            <Form.Text className="text-muted">
                                Already have an Account ?
                            </Form.Text>
                            <a style={{marginLeft: '1rem'}} onClick={handleLogin}>login</a>
                        </Form.Group>

                        <Button variant="primary" type="submit"
                                disabled={!(register.password === register.confirmPassword)}>Submit</Button>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>);
};

export default Register;