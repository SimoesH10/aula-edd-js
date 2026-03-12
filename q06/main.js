/*Escreva um programa que solicite ao usuário uma
 temperatura em graus Celsius e converta-a para Fahrenheit. Imprima o resultado formatado. */

 function converter_temperatura(){
    const celsius = document.getElementById("temperatura").value
    console.log(celsius)

    const fahrenheit = celsius * 1.8 + 32

    console.log(fahrenheit)
 }