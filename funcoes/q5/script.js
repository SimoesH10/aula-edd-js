function criarObjetos(nomes, callback) {
    let resultado = [];

    for (let i = 0; i < nomes.length; i++) {
        resultado.push(callback(nomes[i]));
    }

    return resultado;
}

let nomes = ["Alice", "Bob", "Carlos"];

let objetos = criarObjetos(nomes, function(nome) {
    return {
        nome: nome
    };
});

console.log(objetos);