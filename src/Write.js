import React from 'react';
import { Stack } from 'react-bootstrap';
import Header from './components/Header';
import Title from './components/Title';
import ProductWrite from './components/ProductWrite';

function Write(props) {
    return (
        <>
            <Stack gap={3}>
                <Header />
                <Title />
                <ProductWrite />
            </Stack>
        </>
    );
}

export default Write;