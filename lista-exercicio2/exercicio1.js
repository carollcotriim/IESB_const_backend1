const express =  require('express');
const app = express();
const PORT = 3000;

app.get('/calcular-estoque-medio', (req, res) => {
    const { quantidadeMinima, quantidadeMaxima } = req.query;

    if (!quantidadeMinima, quantidadeMaxima) {
        return res.status(400).json({ error: 'Parâmetro inválidos. Forneça quantidadeMinima e quantidadeMaxima.'});
    } 

    const estoqueMedio = (parseInt(quantidadeMinima) + parseInt(quantidadeMaxima)) / 2;
    res.json({ estoqueMedio }); 
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});