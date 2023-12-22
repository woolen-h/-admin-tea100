import React from 'react';
import Header from './Header';
import { Stack } from 'react-bootstrap';

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <Stack gap={3}>
            <Header />
            { props.children }
        </Stack>
    );
};

export default Layout;