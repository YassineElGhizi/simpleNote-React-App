import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {Button, Col, Container, Row} from "react-bootstrap";


const Leftpanel = () => {



    return (<div>
        <InputGroup className="mb-3 m-lg-1">
            <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
            <Form.Control aria-describedby="basic-addon1"/>
        </InputGroup>
        <Row>
            <Col sm="12">
                <Container className="d-flex justify-content-center">
                    <Button variant="primary" style={{width: '100%'}}>Add new 🗒</Button>{' '}
                </Container>
            </Col>
            <Col sm="12" style={{border: '1px solid black', marginTop: '2px'}}>Lorem ipsum dolor sit amet, ...</Col>
            <Col sm="12" style={{border: '1px solid black', marginTop: '2px'}}>Lorem ipsum dolor sit amet, ...</Col>
            <Col sm="12" style={{border: '1px solid black', marginTop: '2px'}}>Lorem ipsum dolor sit amet, ...</Col>
            <Col sm="12" style={{border: '1px solid black', marginTop: '2px'}}>Lorem ipsum dolor sit amet, ...</Col>
            <Col sm="12" style={{border: '1px solid black', marginTop: '2px'}}>Lorem ipsum dolor sit amet, ...</Col>
            <Col sm="12" style={{border: '1px solid black', marginTop: '2px'}}>Lorem ipsum dolor sit amet, ...</Col>

        </Row>
    </div>);
};

export default Leftpanel;