import express from "express"
import {cadastrarProduto, listarProduto, precoProduto, produtoAtivo,nomeProduto} from "../controller/produtoController.js";

const route = express.Router();

route.post('/cadastrarProduto', cadastrarProduto);
route.get('/listarProduto', listarProduto);
route.get('/produtoAtivo', produtoAtivo);
route.get('/precoProduto', precoProduto);
route.get('/nomeProduto', nomeProduto);

export default route;


