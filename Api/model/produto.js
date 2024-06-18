import mongoose from "mongoose";

const produto = new mongoose.Schema({
    descricao:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    desconto:{
        type: Number,
        required: true
    }
})

export default mongoose.model("produto", produto);

