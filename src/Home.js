import React from 'react';
import { Stack } from 'react-bootstrap';
import Header from './components/Header';
import Title from './components/Title';
import Board from './components/Board';

function Home(props) {
    return (
        <div>
            <Stack gap={3}>
                <Header />
                <Title />
                <Board />
            </Stack>
        </div>
    );
}

export default Home;