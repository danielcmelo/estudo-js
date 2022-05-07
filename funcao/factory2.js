function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Daniel', 1235.45))
console.log(criarProduto('Joao', 1235.45))