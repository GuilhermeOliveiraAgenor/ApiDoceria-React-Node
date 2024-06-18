import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from 'cors'
import usuarioRoute from "./routes/usuarioRoute.js"
import produtoRoute from "./routes/produtoRoute.js"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL


app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
})

mongoose.connect(MONGOURL).then(()=>{
    console.log("Banco de dados conectado");
    app.listen(PORT, ()=>{
        console.log(`Servidor rodando na porta ${PORT}`)
    })})
    .catch((error) => console.log(error));

app.use("/usuario", usuarioRoute);
app.use("/produto", produtoRoute);


