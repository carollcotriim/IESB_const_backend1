const express = require('express')
const router = express.Router()

const listaProdutos = [
    {
        id: 1,
        nome: "Gloss",
        preco: 249.00
    },
    {
        id: 2,
        nome: "Corretivo Too Faced",
        preco: 279.00
    },
    {
        id: 3,
        nome: "Iluminador Rare Beauty",
        preco: 189.00
    }
]


router.get('/produtos', (req, res) => {
    res.json(listaProdutos)
})

//READ -> BUSCA DE PRODUTO POR ID
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    if(produto){
        res.json(produto)
    } else {
        res.status(404).json({Mensagem:"Produto não encontrado!"})
    }
    res.json(produto)
})

//CREATE -> Criar um novo produto
router.post('/produtos', (req, res) => {
    const dadosProduto = req.body

    const novoProduto = {
        id: listaProdutos.length + 1,
        nome: dadosProduto.nome,
        preco: dadosProduto.preco
    }

    listaProdutos.push(novoProduto)

    res.json({
        mensagem: "Produto criado com sucesso!"
    })
})


//DELETE- Deletar produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.json({mensagem: "Produto excluido com sucesso!"})
})


module.exports = router


