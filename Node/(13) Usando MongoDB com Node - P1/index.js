// (13) Usando MongoDB com Node - P1 - Inserindo dados no DB
const mongodb = require('mongodb').MongoClient
proccess.env.URL_MONGO
   // Obtido em 'connect' após criar o DB no site

mongodb.connect(url, (erro, banco) => {  
   if(erro) throw erro
   const dbo = banco.db("cfbcursos") // Se nao tem o banco ele cria

   const obj = {curso: "Curso de Javascript", canal: "CFB Cursos"}

   const colecao = "cursos" 
   dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
      if(erro) throw erro
      console.log('1 novo curso inserido')
      banco.close()
   }) // Se nao tem a coleção ele cria
})

// É preciso criar um usuario para 'manipular' dados no DB pelo site
// É preciso inserir (aprovar) o IP para inserir os dados.