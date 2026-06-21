/*Escreva um programa que solicite ao usuário dois números
 e verifique se o primeiro número é maior que o segundo. 
 Imprima uma mensagem informando o resultado da comparação. */

 function maior_valor() {
    const num1 = document.getElementById("valor1").value
    console.log(num1)

    const num2 = document.getElementById("valor2").value
    console.log(num2)

    if (num1 > num2) {
        console.log("O número 1 é o maior!")
    }else if (num1 == num2){
        console.log("Ambos os números são iguais!")
    }else{
        console.log("O número 2 é o maior!")
    }
 }