const express = require('express')
const app = express()

// middlewares
app.use(express.json()) 

//rotas
const listaCarros = [
    {
        id: 1,
        marca: "Honda",
        nome: "Civic",
        cor: "Preto",
        preco: 110.000
    },
    {
        id: 2,
        marca: "Hyundai",
        nome: "HB20",
        cor: "Prata",
        preco: 100.000
    },
    {
        id: 3,
        marca: "Toyota",
        nome: "Corolla",
        cor: "Branco",
        preco: 120.000
    },
    {
        id: 4,
        marca: "Porshe",
        nome: "911",
        cor: "Rosa",
        preco: 500.000
    }
]

app.get('/index', (req, res) => {
    res.json(listaCarros)
})



app.post('/index', (req, res) => {
    const dadosCarros = req.body

    const novoCarros = {
        id: listaCarros.length + 1,
        nome: dadosCarros.nome,
        cor: dadosCarros.cor,
        preco: dadosCarros.preco
    }

    listaCarros.push(novoCarros)

    res.json({
        mensagem: "Produto criado com sucesso!"
    })
})

app.delete('/index/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(Carros => Carros.id == id)
    listaCarros.splice(index, 1)
    res.json({mensagem: "Carro excluido com sucesso!"})
})

app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})
