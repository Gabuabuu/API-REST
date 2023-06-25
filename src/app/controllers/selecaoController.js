import conexao from "../database/conexao.js"

class selecaoController {

    index(req, res) {
        const sql = "SELECT * FROM selecoes" //Selecionando lista de seleções do banco de dados
        conexao.query(sql, (error, result) => {
          if (error) {
            console.log(error)
            res.status(404).json({ 'error': `${error}` })
          } else {
            res.status(200).json(result)
          }
        })
      }

    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?" //Obtendo informações da seleção atraves do id 
        conexao.query(sql, id, (error, result) => {
          const row = result[0]
          if (error) {
            console.log(error)
            res.status(404).json({ 'error': `${error}` })
          } else {
            res.status(200).json(row)
          }
        })
      } 
    store(req, res)  {
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?" //Inserindo dados na tabela de seleções dentro do banco de dados
        conexao.query(sql, selecao, (error, result) => {
          if (error) {
            console.log(error)
            res.status(404).json({ 'error': `${error}` })
          } else {
            res.status(201).json(result)
          }
        })
      }
    update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?" //Atualizando dados na tabela de seleções por id
        conexao.query(sql, [selecao, id], (error, result) => {
          if (error) {
            console.log(error)
            res.status(404).json({ 'error': `${error}` })
          } else {
            res.status(201).json(result)
          }
        })
      }
    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?" //Deletando seleção da tabela atraves do id 
        conexao.query(sql, id, (error, result) => {
          if (error) {
            console.log(error)
            res.status(404).json({ 'error': `${error}` })
          } else {
            res.status(200).json(result)
          }
        })
      }
}

//Padrão Singleton
export default new selecaoController()