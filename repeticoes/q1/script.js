const numero = Number(prompt("Digite um número:"));
const lista = document.getElementById("lista");

for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        lista.innerHTML += `<li>${i}</li>`;
    }
}
