import React from 'react';
import ProductWrite from './components/ProductWrite';
import Layout from './components/Layout';
import Title from './components/Title';
import { Container } from 'react-bootstrap';

function Write(props) {
    return (
        <Layout>
            <Title />
            <Container className='container_board'>
                <ProductWrite />
            </Container>
        </Layout>
    );
}

export default Write;