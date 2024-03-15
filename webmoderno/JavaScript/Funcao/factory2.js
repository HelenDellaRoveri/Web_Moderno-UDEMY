function criarProduto(nome, preco, quantidade) {
    return {
        nome,
        preco,
        quantidade,
        desconto: 0.1
    }
}

console.log(criarProduto("Motorola Edge 30 Neo", 1900.50, 34))
console.log(criarProduto("Motorola Edge 30", 1999.50,29))
console.log(criarProduto("Motorola Edge 40 Neo", 2200.60, 84))
console.log(criarProduto("Motorola Edge 40", 2100.90, 72))
