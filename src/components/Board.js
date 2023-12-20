import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { BiSolidUpArrow } from "react-icons/bi";
import './Board.scss';

function Board(props) {
    return (
        <Container>
            <Navbar className="py-2 px-3">
                <Nav className="me-auto">
                    <Nav.Link href="#menu01">menu01</Nav.Link>
                    <Nav.Link href="#menu02">menu02</Nav.Link>
                    <Nav.Link href="#menu03">menu03</Nav.Link>
                    <Nav.Link href="#menu04">menu04</Nav.Link>
                    <Nav.Link href="#menu05">menu05</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link>Todo</Nav.Link>
                        <Nav.Link>Setting</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container className='board_bg'>
                <Row>
                    <Col>
                        <h5>Total Data</h5>
                        <p><span className='accent'>00,000</span>개</p>
                        <p className='discription m-0'><span className='pe-2'>000</span><BiSolidUpArrow size={12} className='mb-1 me-2' />최근 1개월</p>
                    </Col>
                    <Col>
                        <h5>Total Access Count</h5>
                        <p><span className='accent'>00,000</span>개</p>
                        <p className='discription m-0'>
                            <span className='pe-2'>000</span>
                            <BiSolidUpArrow size={12} className='mb-1 me-2' />
                            (최근 1개월)
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Board;