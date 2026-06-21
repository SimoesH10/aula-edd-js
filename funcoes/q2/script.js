function saudar(nome, callback) {
    callback(nome);
}

saudar("Alice", function(nome) {
    console.log("Olá, " + nome + "!");
});