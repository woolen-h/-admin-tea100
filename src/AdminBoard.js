import React from 'react';
import Title from './components/Title';
import Layout from './components/Layout';
import { Container } from 'react-bootstrap';
import ProductBoard from './components/ProductBoard';

function AdminBoard(props) {
    return (
        <Layout>
            <Title />
            <Container className='container_board'>
                <ProductBoard />
            </Container>
        </Layout>
    );
}

export default AdminBoard;