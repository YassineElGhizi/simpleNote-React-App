import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {base_url} from "../../config/env";
import {useDispatch, useSelector} from "react-redux";
import {add_auth} from "../../redux/authSlice";
import {Button, Col, Container} from "react-bootstrap";


const Rightpanel = () => {
    const [id, setId] = useState(null);
    const [content, setContent] = useState('');

    let empty = () => {
        setId(null)
        setContent('')
    }

    const auth = useSelector((state) => {
        return state.auth;
    });

    const dispatch = useDispatch();

    let handleAuth = (user) => {
        dispatch(add_auth(user))
    }

    let handleWriting = (e) => {
        setContent(e.target.value)

        if (id === null) {
            axios.post(base_url + '/notes', {"id": auth.id, "body": content}, {'Accept': 'application/json'}
            ).then((res) => {
                setId(res.data.notes.slice(-1)[0].id)
                handleAuth(res.data)
                window.localStorage.setItem("auth", true)
                window.localStorage.setItem("user", JSON.stringify(res.data))
            }).catch((err) => {
                console.log("🤨 Cant get created Note data = ", err.response.data.errors)
                alert("Network Error 01")
            })
        } else {
            axios.put(base_url + '/notes/' + id, {"body": content}, {'Accept': 'application/json'}
            ).then((res) => {
                setId(res.data.notes.slice(-1)[0].id)
                handleAuth(res.data)
                window.localStorage.setItem("auth", true)
                window.localStorage.setItem("user", JSON.stringify(res.data))
            }).catch((err) => {
                console.log("🤨 Cant get created Note data = ", err.response.data.errors)
                alert("Network Error 02")
            })
        }


    }

    return (<div>
        <div className="d-flex justify-content-center mb-2">
            <Col sm="3">
                <Container className="d-flex justify-content-center">
                    <Button variant="primary" style={{width: '100%'}} onClick={empty} >Add new 🗒</Button>{' '}
                </Container>
            </Col>
        </div>

        <Form.Control as="textarea" style={{height: '30rem'}} value={content} onChange={(e) => {
            handleWriting(e)
        }}/>
    </div>)
};

export default Rightpanel;