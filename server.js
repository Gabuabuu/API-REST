import app from "./src/app.js"; //

const PORT = 2811; //Endereço da porta do server

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})