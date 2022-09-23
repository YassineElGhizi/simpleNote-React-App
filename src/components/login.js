import React, {useState} from 'react';
import {Alert, Button, Card, Container, Form,} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {togleRegister} from "../redux/registerSlice";
import {add_auth} from "../redux/authSlice";
import axios from "axios";
import myenv from "../config/env";

const Login = () => {
    const dispatch = useDispatch();

    let handleRegister = () => {
        dispatch(togleRegister({chosen: 1}))
    }


    let handleAuth = (user) => {
        dispatch(add_auth(user))
    }

    const [login, setLogin] = useState({'name': '', 'password': ''});
    const [error, setError] = useState({'error': false, 'body': ''})

    let handleSubmit = async (e) => {
        e.preventDefault()
        if (login.name === '') return setError({'error': true, 'body': 'some fields are required'})
        if (login.password === '') return setError({'error': true, 'body': 'some fields are required'})
        setError({'error': false, 'body': ''})

        await axios.post(myenv.base_url + '/users/login', login, {headers: myenv.headers}).then((response) => {
            handleAuth({'name': response.data.name, 'token': response.data.token, 'notes': response.data.notes})

            window.localStorage.setItem("auth", true)
            window.localStorage.setItem("user", JSON.stringify({
                'name': response.data.name,
                'token': response.data.token,
                'notes': response.data.notes
            }))
            window.location.href = "/notes"


        }).catch(function (error) {
            setError({'error': true, 'body': error.response.data.status})
        });
    }

    let handleChange = (choice, e) => {
        switch (choice) {
            case 1:
                setLogin((prevState) => {
                    let user = Object.assign({}, prevState)
                    user.name = e.target.value
                    return user
                })
                break
            case 2:
                setLogin((prevState) => {
                    let user = Object.assign({}, prevState)
                    user.password = e.target.value
                    return user
                })
                break
            default:
                break
        }
    }


    return (<div>
        <Container className="d-flex justify-content-center">
            <Card style={{width: '50rem', marginTop: "7rem"}}>
                <Card.Body>
                    {error.error && <Alert variant="danger">{error.body}</Alert>}
                    <Card.Title>Login</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter a user name" value={login.name}
                                          onChange={(e) => handleChange(1, e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={login.password}
                                          onChange={(e) => handleChange(2, e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Dont have an Account ?
                            </Form.Text>
                            <a style={{marginLeft: '1rem', cursor: 'pointer', color: 'blue'}}
                               onClick={handleRegister}>register</a>
                        </Form.Group>

                        <Button variant="primary" onClick={(e) => handleSubmit(e)}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>);
};

export default Login;