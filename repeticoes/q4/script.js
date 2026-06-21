const palavra = prompt("Digite uma palavra:");
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

document.getElementById("resultado").textContent = invertida;