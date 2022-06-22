const express = require("express");
const app = express();

//definindo meu renderizador de HTML
app.set('view engine','ejs');

//criando a pasta para salvar os arquivos estaticos/imagens planilhas/css 
app.use(express.static('public'));

app.locals.siteName = "Site do Gustavo"


//definição de rotas 000
app.get("/",(req,res) =>{
   res.render('index');
});

//definição de rota 001
app.get("/perguntar",(req,res)=>{
    res.render('perguntar');
});

app.get("/perfil",(req,res)=>{
    res.render('principal/perfil');
})

app.listen(8080,()=>{
  console.log("Servidor Online!")
});