import {React, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import styles from '../styles/ProdutoAtivo.module.css'




const ProdutoAtivo = () =>{

        const navigate = useNavigate();
        const [produtos, setProdutos] = useState([]);
        

        useEffect(() => {
            const listar = async() =>{
                const {data} = await axios.get('http://localhost:8000/produto/produtoAtivo');
                setProdutos(data)
            };
            listar();
        },[]);

        console.log(produtos)

    return(
        
        <div>
            <tr style={{display: 'flex',justifyContent: 'center',alignItems: 'center', width: '100%', backgroundColor: '#A0522D',width: '100%', height: '100px' }} >
            <th>Doceria</th>
        <th>CACAU SWEET</th>
    </tr>
        <table  style={{ borderCollapse: 'collapse', width: '100%' }} >
        <thead>
   
    <tr style={{ backgroundColor: '#DEB887' }}> 
        <th>Descrição</th>
        <th>Preço</th>
        <th>Status</th>
        <th>Desconto</th>
    </tr>
    
   
    
</thead>

            <tbody>
                {produtos.map(produto =>
                    <tr key={produto._id}>
                        <td>{produto.descricao}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.status}</td>
                        <td>{produto.desconto}</td>
                    </tr>
                )}
            </tbody>
            <div className="flex justify-center items-center h-screen">
            </div>
        </table>
        
        </div>
        
    )
}

export default ProdutoAtivo;



