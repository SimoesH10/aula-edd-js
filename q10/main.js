/* Escreva um programa que solicite ao usuário duas strings
 e verifique se elas são iguais. Imprima uma mensagem 
 informando o resultado da comparação. */

 function enviar_string() {
    const valor1 = document.getElementById("valor1").value
    console.log(valor1)

    const valor2 = document.getElementById("valor2").value
    console.log(valor2)

    if (valor1 === valor2) {
        console.log("Os Valores são iguais!")
    }else{
        console.log("Os Valores não são iguais")
    }

 }