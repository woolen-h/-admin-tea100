import React from 'react';
import Layout from './components/Layout';
import './components/Login.scss';
import './App.scss';
import { Button, Container, Form } from 'react-bootstrap';

function Login(props) {
    return (
        <Layout>
            <h1 className='LoginTitle text-center'>Login</h1>
            <Container className='d-flex justify-content-center'>
                <div className='me-2'>
                    <Form.Control className='mb-2' size="sm" type="text" placeholder="ID" />
                    <Form.Control size="sm" type="password" placeholder="PW" />
                </div>
                <div>
                    <Button className='LoginButton btn-danger' as="input" type="submit" value="🔑" />
                </div>
            </Container>
        </Layout>
    );
}

export default Login;