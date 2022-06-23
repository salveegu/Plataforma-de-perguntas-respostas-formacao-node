const { Sequelize } = require("sequelize");
const Squelize = require ("sequelize");
const connection = require("./database");

const Pergunta = connection.define('perguntas',{
    mTitulo:{
        type: Squelize.STRING,
        allowNull:false

    },
    mDescricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

Pergunta.sync({force: false}).then(()=>{
    console.log("Tabela criada com sucesso!");
});

module.exports = Pergunta;