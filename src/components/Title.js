import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Title.scss';

function Title(props) {
    return (
        <Container className='title_container'>
            <Row>
                <Col sm={3}>
                    <h1>Dashboard</h1>
                    <p>홈 보드입니다.</p>
                </Col>
                <Col sm={9} className="title_button_group">
                    <Row>
                        <Col className='d-grid'>
                            <Button variant="outline-dark">상품 데이터 등록</Button>
                        </Col>
                        <Col className='d-grid'>
                            <Button variant="outline-dark">상품 데이터 관리</Button>
                        </Col>
                        <Col className='d-grid'>
                            <Button variant="outline-dark">커뮤니티 게시판 등록</Button>
                        </Col>
                        <Col className='d-grid'>
                            <Button variant="outline-dark">커뮤니티 게시판 관리</Button>
                        </Col>
                        <Col className='d-grid'>
                            <Button variant="outline-dark">회원 계정 관리</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Title;