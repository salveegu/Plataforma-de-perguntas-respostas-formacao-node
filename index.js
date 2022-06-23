const express = require("express");
const app = express();
// body parser usado para processar dados enviados por meio de um corpo de solicitação HTTP . Ele expõe quatro middlewares expressos para análise de texto, JSON, codificação de URL e conjunto de dados brutos por meio de um corpo de solicitação HTTP.
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");

//database testando conexao
connection.authenticate().then(()=>{
  console.log("Sucesso ao se conectar com o banco")
}).catch((msgErro)=>{
   console.log(msgErro);
})

//definindo meu renderizador de HTML
app.set('view engine','ejs');

//criando a pasta para salvar os arquivos estaticos/imagens planilhas/css 
app.use(express.static('public'));

//configurando o body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.locals.siteName = "Site do Gustavo"


//definição de rotas 000
app.get("/",(req,res) =>{
   res.render('index');
});

//definição de rota 001
app.get("/perguntar",(req,res)=>{
    res.render('perguntar');
});

//definição de rota 002
app.post("/salvarpergunta",(req,res)=>{
    
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    perguntaModel.create({
      mTitulo:titulo,
      mDescricao:descricao

    }).then(()=>{
      res.redirect("/");
    })
});

app.listen(8080,()=>{
  console.log("Servidor Online!")
});