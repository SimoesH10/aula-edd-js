function filtrar(lista, callback) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i])) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

let numeros = [1, 12, 5, 8, 130, 44];

let pares = filtrar(numeros, function(numero) {
    return numero % 2 === 0;
});

console.log(pares);