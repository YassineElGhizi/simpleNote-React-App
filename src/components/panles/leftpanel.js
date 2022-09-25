import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";


const Leftpanel = () => {

    const notes = useSelector((state) => {
        return state.auth.notes;
    });

    return (
        < div>
            < InputGroup
                className="mb-3 m-lg-1">
                < InputGroup.Text
                    id="basic-addon1">🔎</InputGroup.Text>
                <Form.Control aria-describedby="basic-addon1"/>
            </InputGroup>
            <Row>

                {notes.slice(0).reverse().map((note) => {
                    return (
                        <Col sm="12" style={{borderBottom: '0.1px solid black', marginTop: '2px'}}
                             id={note.id}>{note.body.substring(0, 25)}
                            {note.body.length > 25 && '...'}
                        </Col>)

                })}
            </Row>
        </div>)
        ;
};

export default Leftpanel;