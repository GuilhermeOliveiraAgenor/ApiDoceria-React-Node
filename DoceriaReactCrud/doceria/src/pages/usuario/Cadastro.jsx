import {React, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Cadastro = () =>{
    
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [usuarios, setUsuarios] = useState({
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
    });

    const usuario ={
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
    }

    const alterar = async (e) =>{
        try {
            axios.patch(`http://localhost:8000/usuario/editarUsuario/${id}`, usuario);
            return navigate('/')
        } catch (error) {
          console.log(error);
        }
      }

    const listar = async() =>{
        const {data} = await axios.get(`http://localhost:8000/usuario/pesquisarId/${id}`);
        setUsuarios(data)
    };

    const excluir = async (e) =>{
        try {
            axios.delete(`http://localhost:8000/usuario/excluirUsuario/${id}`);
            return navigate('/')
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() =>{
        listar();
    },[])


    return(
        <main>
        <div>
        <tr style={{display: 'flex',justifyContent: 'center',alignItems: 'center', width: '100%', backgroundColor: '#A0522D',width: '100%', height: '100px' }} >
            <th>Doceria</th>
        <th>CACAU SWEET</th>
        </tr>
            <div>
               Imagem
            </div>
            <div>
            <p> Já tem cadastro ? <a href='../login/login'>Clique Aqui</a></p>
            <form onSubmit={alterar}>
                <div >
                    <label>Nome{nome}</label>
                    <input type='text' id='nome' defaultValue={usuarios.nome} onChange={(e)=> setNome(e.target.value)} placeholder='Digite o nome' maxLength={50} required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' id='email' defaultValue={usuarios.email} onChange={(e) => setEmail(e.target.value)}  placeholder='Digite o email'  required/>
                </div>
                <div>
                    <label>Telefone</label>
                    <input type='text' id='telefone' defaultValue={usuarios.telefone} onChange={(e) => setTelefone(e.target.value)}  placeholder='Digite o telefone' required/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type='password' id='senha' defaultValue={usuarios.senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite o senha' required/>
                </div>
                <div>
                    <label>Confirmar Senha</label>
                    <input type='password' id='confirmarSenha' placeholder='Digite a senha novamente' required/>
                </div>
                <div>
                   <button type='submit' onClick={alterar}>Alterar</button>
                   <button type='submit' onClick={excluir}>Excluir</button>
                </div>
            </form>
            <div></div>{/*chama o componente para alterar cor*/}
            </div>
        </div>
      </main>

    )
}

export default Cadastro;



