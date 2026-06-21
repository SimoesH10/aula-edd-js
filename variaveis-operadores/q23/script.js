let texto = prompt("Digite um texto:");

let contador = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a" || texto[i] === "A") {
        contador++;
    }
}

console.log("Quantidade de letras A:", contador);