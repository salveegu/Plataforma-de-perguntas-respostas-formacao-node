const express = require("express");
const app = express();

//definindo meu renderizador de HTML
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,"./views"))

app.locals.siteName = "Site do Gustavo"

//definição de rotas
app.get("/",(req,res) =>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    var hobbie = "Violão";
    var exibirMsg = false;
 
    var produtos = [
        {nome: "Doritos",preco:3.14},
        {nome: "Coca-cola",preco:5.0},
        {nome: "Leite",preco:1.45}
    ]

    res.render('index',{
        nome: nome,
        lang:lang,
        empresa:"Guia do Programador",
        inscritos: 8080,
        hobbie:hobbie,
        msg:exibirMsg,
        produtos:produtos
    });
    
});

app.get("/home",(req,res)=>{
    res.render('home');
});

app.get("/perfil",(req,res)=>{
    res.render('principal/perfil');
})

app.listen(8080,()=>{
  console.log("Servidor Online!")
});