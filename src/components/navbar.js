import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Col, Row} from "react-bootstrap";

function Mynavbar() {
    return (<Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand>Simple Note</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Row>
                        <Col>
                            <Nav.Link> <img src="/images/react.png" alt="" style={{maxWidth: '4rem'}}/></Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link>
                                <img src="/images/redux.png" alt=""
                                     style={{
                                         maxWidth: '4.3rem', filter: 'brightness(1.75)'
                                     }}/>
                            </Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link>
                                <img src="/images/mongodb.png" alt="" style={{
                                    maxWidth: '3rem', filter: 'brightness(1.25)'
                                }}/>
                            </Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link>
                                <img src="/images/node.png" alt="" style={{
                                    maxWidth: '5rem', filter: 'brightness(1.25)'
                                }}/>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default Mynavbar;