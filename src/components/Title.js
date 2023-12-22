import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Title.scss';

function Title(props) {
    return (
        <Container className='title_container'>
            <Row>
                <Col sm={3}>
                    <h1>Page Name</h1>
                    <p>Page Name 게시판입니다.</p>
                </Col>
                <Col sm={9} className="title_button_group">
                    <Row>
                        <Col className='d-grid'>
                            <Button variant="outline-dark">
                                <Link to='/admin/write'>
                                    상품 데이터 등록
                                </Link>
                            </Button>
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