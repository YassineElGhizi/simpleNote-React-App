import React, {useState} from 'react';
import {Alert, Button, Card, Container, Form,} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {togleRegister} from "../redux/registerSlice";
import myenv from "../config/env";
import {add_auth} from "../redux/authSlice";

const axios = require('axios').default;


const Register = () => {
    const dispatch = useDispatch();
    let handleLogin = () => {
        dispatch(togleRegister({chosen: -1}))
    }

    let handleAuth = (user) => {
        dispatch(add_auth(user))
    }

    const [register, setRegister] = useState({'name': '', 'password': '', 'confirmPassword': ''});
    const [error, setError] = useState({'error': false, 'body': ''})

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

    let handleSubmit = async (e) => {
        e.preventDefault()
        if (register.password === '') return setError({'error': true, 'body': 'password should not be empty'})
        if (register.password !== register.confirmPassword) return setError({
            'error': true,
            'body': 'password doest match'
        })
        setError({'error': false, 'body': ''})


        await axios.post(myenv.base_url + '/users', {
            'name': register.name,
            'password': register.password
        }, {headers: myenv.headers}).then((response) => {
            handleAuth({'name': response.data.name, 'token': response.data.token, 'notes': response.data.notes})
        }).catch(function (error) {
            setError({'error': true, 'body': error.response.data.status})
        });
    }

    return (<div>
        <Container className="d-flex justify-content-center">
            <Card style={{width: '50rem', marginTop: "7rem"}}>
                <Card.Body>
                    {error.error && <Alert variant="danger">{error.body}</Alert>}
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
                            <a style={{marginLeft: '1rem', cursor: 'pointer', color: 'blue'}}
                               onClick={handleLogin}>login</a>
                        </Form.Group>

                        <Button variant="primary"
                                disabled={!(register.password === register.confirmPassword)}
                                onClick={(e) => {
                                    handleSubmit(e)
                                }}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>);
};

export default Register;