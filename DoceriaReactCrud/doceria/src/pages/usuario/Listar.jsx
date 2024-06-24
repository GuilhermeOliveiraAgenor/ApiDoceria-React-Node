import {React, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listar = () =>{

        const navigate = useNavigate();
        const [usuarios, setUsuarios] = useState([]);
        

        useEffect(() => {
            const listar = async() =>{
                const {data} = await axios.get('http://localhost:8000/usuario/listarUsuario');
                setUsuarios(data)
            };
            listar();
        },[]);

        console.log(usuarios)

    return(
        <div>
             <tr style={{display: 'flex',justifyContent: 'center',alignItems: 'center', width: '100%', backgroundColor: '#A0522D',width: '100%', height: '100px' }} >
            <th>Doceria</th>
        <th>CACAU SWEET</th>
        </tr>
            <div>
                <button onClick={() =>navigate('/user')}>Cadastrar</button>
            </div>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Senha</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario =>
                    <tr key={usuario._id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.telefone}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.senha}</td>
                        <td><button onClick={()=>navigate(`/cadastro/${usuario._id}`)}>Editar</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        <div>
            <button onClick={() => navigate('/produtoativo')}>Produtos ativos</button>
            <button onClick={() => navigate('/produtopreco')}>Produtos com preço igual ou maior que 10 reais</button>
            <button onClick={() => navigate('/produtonome')}>Produto que tenham a letra C</button>
        </div>
        </div>
    )
}

export default Listar;



