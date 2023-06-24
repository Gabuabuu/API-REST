import express from 'express';
import conexao from './app/database/conexao.js' //Importando conexão do banco de dados (DB)
const app = express();

//Indicar para o express ler o json do body
app.use(express.json())

//mock
const selecoes = [
  { id: 1, selecao: 'Brasil', grupo: 'G' },
  { id: 2, selecao: 'Suiça', grupo: 'G' },
  { id: 3, selecao: 'Servia', grupo: 'G' },
  { id: 4, selecao: 'Camarões', grupo: 'G' }
]


app.get('/selecoes', (req, res) => {
  const sql = "SELECT * FROM selecoes" //Selecionando lista de seleções do banco de dados
  conexao.query(sql, (error, result) => {
    if (error) {
      console.log(error)
      res.status(404).json({ 'error': `${error}` })
    } else {
      res.status(200).json(result)
    }
  })
})


//Get com opção de busca por id
app.get('/selecoes/:id', (req, res) => {
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
})

//Metodo para criar nova seleção
app.post('/selecoes', (req, res) => {
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
})

//Delete por id
app.delete('/selecoes/:id', (req, res) => {
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
})

//Atualiza por id
app.put('/selecoes/:id', (req, res) => {
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
})

export default app //Exportação padrão é o app 