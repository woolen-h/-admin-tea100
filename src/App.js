import './App.scss';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Write from './Write';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/admin/write' Component={Write}></Route>
      </Routes>
    </>
  );
}

export default App;
