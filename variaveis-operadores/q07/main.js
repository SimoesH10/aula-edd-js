/*Escreva um programa que solicite ao usuário o seu 
salário mensal e o número de meses trabalhados no ano. 
Calcule e imprima o salário anual. */

function salario_anual() {
    const salario_mensal = parseInt(document.getElementById("salario_mensal").value)
    console.log(salario_mensal)

    const meses_trabalhados = parseInt(document.getElementById("meses_trabalhados").value)
    console.log(meses_trabalhados)

    const salario_anual = salario_mensal * meses_trabalhados
    console.log(salario_anual)
}