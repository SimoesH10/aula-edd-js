function atualizarPessoaCopia(pessoa) {
    let copia = {
        ...pessoa
    };

    copia.idade = 40;

    return copia;
}

let pessoa = {
    nome: "Bob",
    idade: 30
};

atualizarPessoaCopia(pessoa);

console.log(pessoa.idade);