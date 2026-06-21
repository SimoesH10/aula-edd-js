function atualizarPessoa(pessoa) {
    pessoa.idade = 30;
}

let pessoa = {
    nome: "Alice",
    idade: 25
};

atualizarPessoa(pessoa);

console.log(pessoa);