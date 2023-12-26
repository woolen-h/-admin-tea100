import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Write from './Write';
import Login from './Login';
import AdminBoard from './AdminBoard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/admin/write' Component={Write}></Route>
        <Route path='/admin/admin_board' Component={AdminBoard}></Route>
      </Routes>
    </>
  );
}

export default App;
