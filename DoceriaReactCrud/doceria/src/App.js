import logo from './logo.svg';
import './App.css';
import Listar from './pages/usuario/Listar';
import Cadastro from './pages/usuario/Cadastro';
import { Route,Routes } from 'react-router-dom';
import User from './pages/usuario/User';

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route path="/" element={<Listar />}/>
        <Route path="/cadastro/:id" element={<Cadastro />}/>
        <Route path="/user" element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
