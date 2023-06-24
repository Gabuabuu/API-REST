import mysql from 'mysql'; //Importando mysql
import 'dotenv/config'

const conexao = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB, //Lembrar de tirar isso
    database: process.env.DATABASE
}) //Dados da conexão com a DB

export default conexao //Exportando const conexao