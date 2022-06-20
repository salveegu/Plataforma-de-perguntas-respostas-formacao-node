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
 
    var data = {
         'name': 'Sonam',
         'id': 21,
         'Marks': [40,50,60,70,80]
    }

    res.render('index',{
        nome: nome,
        lang:lang,
        empresa:"Guia do Programador",
        inscritos: 8080,
        hobbie:hobbie,
        msg:exibirMsg
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