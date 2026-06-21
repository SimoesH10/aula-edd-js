let palavra = prompt("Digite uma palavra:");

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}