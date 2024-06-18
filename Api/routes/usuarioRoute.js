import express from "express"
import {cadastrarUsuario, editarUsuario, excluirUsuario, listarUsuario, Login, pesquisarId} from "../controller/usuarioController.js";

const route = express.Router();

route.post('/cadastrarUsuario', cadastrarUsuario);
route.get('/listarUsuario', listarUsuario);
route.get('/Login/:email/:senha', Login);
route.get('/pesquisarId/:id', pesquisarId);
route.patch('/editarUsuario/:id', editarUsuario);
route.delete('/excluirUsuario/:id', excluirUsuario);


export default route;


