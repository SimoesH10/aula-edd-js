/*Escreva um programa que solicite ao usuário um número
 e verifique se ele é par ou ímpar. Imprima uma mensagem 
 informando o resultado. */

 function verificar_num() {
    const num = parseInt(document.getElementById("num").value)
    console.log(num)

    if (num % 2 == 0) {
        console.log(num + " é um número Par")
    }else{
        console.log(num + " é um número Impar")
    }
 }