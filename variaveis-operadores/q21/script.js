let numero = Number(prompt("Digite um número inteiro positivo: "));

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}