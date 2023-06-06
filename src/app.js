import express from 'express';

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


//Retornar o objeto por id
function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
} //Filtrando por seleção dentro da lista de seleções, caso o id seja igual o da lista, retornara a seleção do id 

//Buscar posicao do elemento no array por id
function buscaIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id) //retorna o indice do id que o usuario está buscando
}

//criar rota padrão
app.get('/', (req, res) => {
  res.send("Pagina inicial")
}); //ENDPOINT:Parte final da url. Ex: /filmes, /jogos

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})


//Get com opção de busca por id
app.get('/selecoes/:id', (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id))
})

//Metodo para criar nova seleção
app.post('/selecoes', (req, res) => {
  selecoes.push(req.body) //req.body = corpo da requisão
  res.status(201).send('Seleção cadastrada com sucesso!')
})

//Delete por id
app.delete('/selecoes/:id', (req, res) => {
  let index = buscaIndexSelecao(req.params.id)
  selecoes.splice(index, 1) //Remove elemento do array
  res.status(200).send(`Selecão deletada com o ${req.params.id} deletada sucesso!`)
})

//Atualiza por id
app.put('/selecoes/:id', (req, res) => {
  let index = buscaIndexSelecao(req.params.id)
  selecoes[index].selecao = req.body.selecao
  selecoes[index].grupo = req.body.grupo
  res.json(selecoes)
})

export default app //Exportação padrão é o app 