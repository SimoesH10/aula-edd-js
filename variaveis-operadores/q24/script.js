let entrada = prompt("Digite números separados por vírgula:");

let numeros = entrada.split(",");

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += Number(numeros[i]);
}

let media = soma / numeros.length;

console.log("Média:", media.toFixed(2));