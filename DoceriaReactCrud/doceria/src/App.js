import logo from './logo.svg';
import './App.css';
import Listar from './pages/usuario/Listar';
import Cadastro from './pages/usuario/Cadastro';
import { Route,Routes } from 'react-router-dom';
import User from './pages/usuario/User';
import Produtoativo from './pages/produto/ProdutoAtivo';
import Produtopreco from './pages/produto/ProdutoPreco';
import Produtonome from './pages/produto/ProdutoNome';


function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route path="/" element={<Listar />}/>
        <Route path="/cadastro/:id" element={<Cadastro />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/produtoativo" element={<Produtoativo />}/>
        <Route path="/produtopreco" element={<Produtopreco />}/>
        <Route path="/produtonome" element={<Produtonome />}/>
      </Routes>
    </div>
  );
}

export default App;
