const numero = Number(prompt("Digite um número:"));
const resultado = document.getElementById("resultado");

for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
}