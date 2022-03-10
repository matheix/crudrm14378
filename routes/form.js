module.exports = (app)=>{

    app.get('/cadastro',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })

    //criar uma rota para gravar as informações digitadas no formulário
    app.post('/create',(req,res)=>{
        //criar uma variavel para a conexao importando a config bancodedados
        var conexao = require('../config/bancodedados')
        //executar a conexao
        conexao()
        //criar uma variavel para coleção alunos
        var alunos = require('../models/alunos')
        //receber as informações do formulario
        var formulario = req.body
        //res.send(formulario)
        //criar um documento com as infos do form
        var documento = new alunos({
            nome:formulario.nome,
            rm:formulario.rm,
            turma:formulario.turma,
            idade:formulario.idade
        }).save()
        .then((result)=>{
            res.redirect('/cadastro')
        })
        .catch((err)=>{
            console.log("não foi possível gravar as informações")
        })
    })
}