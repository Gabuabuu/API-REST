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

function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
}

//criar rota padrão
app.get('/', (req, res) => {
    res.send("Pagina inicial")
}); //ENDPOINT:Parte final da url. Ex: /filmes, /jogos

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
        res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body) //req.body = corpo da requisão
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app //Exportação padrão é o app