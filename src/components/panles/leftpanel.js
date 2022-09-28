import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {Badge, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Trash} from 'react-bootstrap-icons';
import axios from "axios";
import {base_url} from "../../config/env";
import {add_auth} from "../../redux/authSlice";

const Leftpanel = ({oussama}) => {

    const notes = useSelector((state) => {
        return state.auth.notes;
    });

    const dispatch = useDispatch();

    let handleAuth = (user) => {
        dispatch(add_auth(user))
    }

    let delete_note = (note) => {
        console.log("note 😗=", note)
        axios.delete(base_url + '/notes/' + note.id, {'Accept': 'application/json'})
            .then((res) => {
                oussama({id: null, body: ''})
                handleAuth(res.data)
                window.localStorage.setItem("auth", true)
                window.localStorage.setItem("user", JSON.stringify(res.data))
                console.log("res after delete 🐸 ", res.data)
            }).catch((err) => {
            console.log("ERROOR AT DELETING ITEM 😥 ", err)
        })
    }

    return (< div>
        < InputGroup
            className="mb-3 m-lg-1">
            < InputGroup.Text
                id="basic-addon1">🔎</InputGroup.Text>
            <Form.Control aria-describedby="basic-addon1"/>
        </InputGroup>
        <Row>
            {notes.slice(0).reverse().map((note) => {
                return (<Col sm="12" id={note.id}>
                    <Badge pill bg="success" onClick={(e) => oussama(note)}
                           style={{cursor: 'pointer'}}>{note.body.substring(0, 25)} {note.body.length > 25 && '...'}
                    </Badge>{' '}

                    <Badge pill bg="danger" onClick={() => {
                        delete_note(note)
                    }} style={{cursor: 'pointer'}}><Trash/>
                    </Badge>{' '}
                </Col>)
            })}
        </Row>
    </div>);
};

export default Leftpanel;