const frase = prompt("Digite uma frase:");
let quantidade = 0;

for (let i = 0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();

    if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {
        quantidade++;
    }
}

document.getElementById("resultado").textContent =
    `Quantidade de vogais: ${quantidade}`;