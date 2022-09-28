import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {Badge, Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Trash} from 'react-bootstrap-icons';

const Leftpanel = ({oussama}) => {

    const notes = useSelector((state) => {
        return state.auth.notes;
    });

    let delete_note = (note) => {
        console.log("reciev note 😗=", note)
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
                    }}
                           style={{cursor: 'pointer'}}><Trash/>
                    </Badge>{' '}
                </Col>)
            })}
        </Row>
    </div>);
};

export default Leftpanel;