import express from 'express';

const app = express();

//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Suiça', grupo: 'G' },
    { id: 3, selecao: 'Servia', grupo: 'G' },
    { id: 4, selecao: 'Camarões', grupo: 'G' }
]

//criar rota padrão
app.get('/', (req, res) => {
    res.send("Pagina inicial")
}); //ENDPOINT:Parte final da url. Ex: /filmes, /jogos

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app //Exportação padrão é o app