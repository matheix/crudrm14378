const mongoose = require('mongoose')

const conexao = async()=>{
    var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
    //var bdatlas = await mongoose.connect('mongodb+srv://userAdmin:<password>@cluster0.9prnz.mongodb.net/test')
}

module.exports = conexao