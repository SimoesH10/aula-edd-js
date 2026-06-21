function adicionarEmCopia(lista, valor) {
    let copia = [...lista];

    copia.push(valor);

    return copia;
}

let listaOriginal = [1, 2, 3];

let novaLista = adicionarEmCopia(listaOriginal, 4);

console.log(listaOriginal);
console.log(novaLista);