/*Escreva um programa que solicite ao usuário dois números
 inteiros e armazene-os em variáveis. Em seguida, calcule
  e imprima a soma, subtração, multiplicação e divisão
   desses números. */

   function somar_valores() {
        const num1 = parseInt(document.getElementById("num1").value)
        console.log(num1)

        const num2 = parseInt(document.getElementById("num2").value)
        console.log(num2)

        const resultado = num1 + num2
        console.log(resultado)
   }