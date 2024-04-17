const express = require('express')
const app = express()

// middlewares
app.use(express.json())

// Definindo uma rota para recuperar todas as pessoas
app.get('/pessoas', (req, res) => {
    res.json(listaDePessoas);
  });
  
  // Definindo uma rota para recuperar uma pessoa específica por meio de seu identificador
  app.get('/pessoas/:id', (req, res) => {
    const pessoaId = req.params.id;
    res.json(pessoaEncontrada);
  });
  
  // Definindo uma rota para adicionar uma nova pessoa
  app.post('/pessoas', (req, res) => {
    const novaPessoa = req.body;
    
    res.json(novaPessoa);
  });
  
  // Definindo uma rota para atualizar uma pessoa existente com base em seu identificador
  app.put('/pessoas/:id', (req, res) => {
    const pessoaId = req.params.id;
    const dadosAtualizados = req.body;

    res.json(pessoaAtualizada);
  });
  
  // Definindo uma rota para remover uma pessoa da lista com base em seu identificador
  app.delete('/pessoas/:id', (req, res) => {
    const pessoaId = req.params.id;
  
    res.send('Pessoa removida com sucesso');
  });

  app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})

