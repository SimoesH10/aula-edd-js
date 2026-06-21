function atualizarCopiaProfunda(produto) {
    let copia = JSON.parse(JSON.stringify(produto));

    copia.especificacoes.ram = "16GB";

    return copia;
}

let produto = {
    nome: "Laptop",
    especificacoes: {
        ram: "8GB"
    }
};

atualizarCopiaProfunda(produto);

console.log(produto.especificacoes.ram);