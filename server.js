import app from "./src/app.js"; //Importando o "app" do app.js

import conexao from "./infra/conexao.js";

const PORT = 2811; //Endereço da porta do server

//Fazer conexão 
conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conexão realizada com sucesso!');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    }
})