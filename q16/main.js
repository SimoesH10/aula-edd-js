/* 
Escreva um programa que solicite ao usuário um número
e imprima a sua tabuada de multiplicação até 10.
*/

function tabuada_num() {
    const num = document.getElementById("num").value
    console.log("Tabuada do número:", num)

    // Loop com for que vai de 0 até 10
    for (let i = 0; i <= 10; i++) {
        // Calcula a multiplicação do número pelo valor atual do loop
        let resultado = num * i
        // Mostra o resultado no console no formato de tabuada
        console.log(num + " x " + i + " = " + resultado)

    }
}