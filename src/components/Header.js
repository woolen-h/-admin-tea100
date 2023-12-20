import './Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';

import { useState } from 'react';
import { Button, Nav, Container, Navbar, Offcanvas } from 'react-bootstrap';

import { IoIosMenu } from 'react-icons/io';
import { FaBell, FaRegEnvelope } from 'react-icons/fa';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" onClick={handleShow}>
          <IoIosMenu />
        </Navbar.Brand>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li><a href="./index.html">홈</a></li>
              <li><a href="./admin_product_write.html">상품 데이터 등록</a></li>
              <li><a href="./admin_product_manage.html">상품 데이터 관리</a></li>
              <li><a href="./admin_user_manage.html">회원 계정 관리</a></li>
              <li><a href="./admin_board_write.html">게시판 커뮤니티 등록</a></li>
              <li><a href="./admin_board_manage.html">게시판 커뮤니티 관리</a></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav className="me-auto">
              <Nav.Link href="#mail">
                <FaRegEnvelope />
              </Nav.Link>
              <Nav.Link href="#notification">
                <FaBell />
              </Nav.Link>
              <Nav.Link href="#profile">
                <Profile />
              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
