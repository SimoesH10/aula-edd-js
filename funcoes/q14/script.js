function atualizarPropriedadeAninhada(usuario) {
    usuario.detalhes.idade = 35;
}

let usuario = {
    nome: "Carol",
    detalhes: {
        idade: 28
    }
};

atualizarPropriedadeAninhada(usuario);

console.log(usuario.detalhes.idade);