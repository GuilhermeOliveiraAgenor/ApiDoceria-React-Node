import Produto from "../model/produto.js";

export const cadastrarProduto = async (req,res) => {

        try {
            const produto = new Produto({
                descricao: req.body.descricao,
                preco: req.body.preco,
                status: req.body.status,
                desconto: req.body.desconto,
            });
            await produto.save()
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar produto'});
        }
}


export const listarProduto = async (req,res) =>{
    
    try {
            const produto = await Produto.find()
            res.status(200).json(produto)
        }
      catch (error) {
        res.status(500).json({error: 'Erro ao listar produto'})
    }

}


export const produtoAtivo = async (req,res) =>{
    
    try {
            const produto = await Produto.find({'status': 'ativo'})
            res.status(200).json(produto)
        }
      catch (error) {
        res.status(500).json({error: 'Erro ao listar produto'})
    }

}

export const precoProduto = async (req,res) =>{
    
    try {
            const produto = await Produto.find({
                preco:{
                    $gte: 10
                }
            })
            res.status(200).json(produto)
        }
      catch (error) {
        res.status(500).json({error: 'Erro ao listar produto'})
    }

}


export const nomeProduto = async (req,res) =>{
    
    try {
            const produto = await Produto.find({descricao: { $regex: '.*' + "C" + '.*' } });
 
            res.status(200).json(produto)
        }
      catch (error) {
        res.status(500).json({error: 'Erro ao listar produto'})
    }

}

