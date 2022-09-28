import React, {useRef, useState} from 'react';
import {Col, Container, Row,} from "react-bootstrap";
import Leftpanel from "./panles/leftpanel";
import Rightpanel from "./panles/rightpanel";

const Dashabord = () => {

    const [id, setId] = useState('')
    const [body, setBody] = useState('')
    const childRef = useRef(null)

    let oussama = (note) => {
        childRef.current.childFunction1(note.id, note.body)
    }

    return (<div>
        <Container fluid>
            <Row>
                <Col sm="3"
                     style={{ padding: '20px', background : '#e7e6e6'}}>
                    <Leftpanel oussama={oussama}/>
                </Col>
                <Col sm="9">
                    <Rightpanel ref={childRef}/>
                </Col>
            </Row>
        </Container>
    </div>);
};

export default Dashabord;