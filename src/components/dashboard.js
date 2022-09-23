import React from 'react';
import {Col, Container, Row,} from "react-bootstrap";
import Leftpanel from "./panles/leftpanel";
import Rightpanel from "./panles/rightpanel";


const Dashabord = () => {

    return (<div>
        <Container fluid>
            <Row>
                <Col sm="3" style={{marginTop: '1rem'}}>
                    <Leftpanel/>
                </Col>
                <Col sm="9" style={{marginTop : '1rem'}}>
                <Rightpanel/>
            </Col>
        </Row>
    </Container>
</div>)
    ;
};

export default Dashabord;