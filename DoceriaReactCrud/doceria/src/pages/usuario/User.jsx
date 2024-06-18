import {React, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const User = () =>{

    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);


    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const usuario ={
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
    }

    const cadastrar = async (e) =>{
      try {
          axios.post('http://localhost:8000/usuario/cadastrarUsuario', usuario);
          return navigate('/')
      } catch (error) {
        console.log(error);
      }
    }

    return(
        <main>
        <div>
            <div>
               Imagem
            </div>
            <div>
            <p> Já tem cadastro ? <a href='../login/login'>Clique Aqui</a></p>
            <form>
                <div>
                    <label>Nome{nome}</label>
                    <input type='text' id='nome'  value={nome} onChange={(e)=> setNome(e.target.value)} placeholder='Digite o nome' maxLength={50} required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Digite o email'  required/>
                </div>
                <div>
                    <label>Telefone</label>
                    <input type='text' id='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)}  placeholder='Digite o telefone' required/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type='password' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite o senha' required/>
                </div>
                <div>
                    <label>Confirmar Senha</label>
                    <input type='password' id='confirmarSenha' placeholder='Digite a senha novamente' required/>
                </div>
                <div>
                   <button type='submit' onClick={cadastrar}>Cadastrar</button>
                </div>
            </form>
            <div></div>{/*chama o componente para alterar cor*/}
            </div>
        </div>
      </main>

    )
}

export default User;



