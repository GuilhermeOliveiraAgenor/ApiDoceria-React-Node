import mongoose from "mongoose";

const usuario = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true
    }
})

export default mongoose.model("usuario", usuario);

