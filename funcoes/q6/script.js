function filtrarProdutos(produtos, callback) {
    let resultado = [];

    for (let i = 0; i < produtos.length; i++) {
        if (callback(produtos[i])) {
            resultado.push(produtos[i]);
        }
    }

    return resultado;
}

let produtos = [
    { nome: "Camiseta", preco: 25 },
    { nome: "Calça", preco: 50 },
    { nome: "Meias", preco: 5 }
];

let produtosFiltrados = filtrarProdutos(produtos, function(produto) {
    return produto.preco > 20;
});

console.log(produtosFiltrados);