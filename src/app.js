import express from 'express';
import selecaoController from './app/controllers/selecaoController.js';

const app = express();

//Indicar para o express ler o json do body
app.use(express.json())

app.get('/selecoes', selecaoController.index)


//Get com opção de busca por id
app.get('/selecoes/:id', selecaoController.show)

//Metodo para criar nova seleção
app.post('/selecoes', selecaoController.store)

//Atualiza por id
app.put('/selecoes/:id', selecaoController.update)

//Delete por id
app.delete('/selecoes/:id', selecaoController.delete)

export default app //Exportação padrão é o app 