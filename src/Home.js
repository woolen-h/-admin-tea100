import React from 'react';
import Board from './components/Board';
import Layout from './components/Layout';
import Title from './components/Title';

function Home(props) {
    return (
        <Layout>
            <Title />
            <Board />
        </Layout>
    );
}

export default Home;