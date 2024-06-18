import usuario from "../model/usuario.js";
import Usuario from "../model/usuario.js";

export const cadastrarUsuario = async (req,res) => {

        try {
            const usuario = new Usuario({
                nome: req.body.nome,
                telefone: req.body.telefone,
                email: req.body.email,
                senha: req.body.senha,
            });
            await usuario.save()
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({error: 'Erro ao cadastrar usuario'});
        }
}

export const listarUsuario = async (req,res) =>{
    
    try {
            const usuario = await Usuario.find()
            res.status(200).json(usuario)
        }
      catch (error) {
        res.status(500).json({error: 'Erro ao listar usuarios'})
    }
}


export const pesquisarId = async (req,res) =>{
    
  console.log(req.params.id)

  try {
          const usuario = await Usuario.findOne({'_id': req.params.id})
          res.status(200).json(usuario)
      }
    catch (error) {
      res.status(500).json({error: 'Erro ao listar usuarios'})
  }
}


export const editarUsuario = async (req,res) =>{
    
  console.log(req.params.id)

  try {
          const usuario = await Usuario.findOneAndUpdate(
            {'_id': req.params.id}, req.body, {new: true}
          )
          console.log(usuario)
          res.status(200).json(usuario)
      }
    catch (error) {
      res.status(500).json({error: 'Erro ao listar usuarios'})
  }
}



export const excluirUsuario = async (req,res) =>{
    
  console.log(req.params.id)

  try {
          const usuario = await Usuario.deleteOne({'_id': req.params.id})
          res.status(200).json("Usuário excluído com sucesso")
      }
    catch (error) {
      res.status(500).json({error: 'Erro ao listar usuarios'})
  }
}


export const Login = async(req,res) =>{

    try{
      const usuario = await Usuario.findOne({}).then((usuarios) => {
            res.status(200).json({usuarios: usuarios})
            console.log({usuarios: usuarios});
        });
        
       
      }catch(error){
        res.status(500).json({error: 'Erro ao fazer login'})
      }
}


