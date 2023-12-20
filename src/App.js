import './App.scss';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Title from './components/Title';
import Board from './components/Board';

function App() {
  return (
    <Stack gap={3}>
      <Header />
      <Title />
      <Board />
    </Stack>
  );
}

export default App;
