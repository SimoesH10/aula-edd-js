/* Escreva um programa que solicite ao usuário a sua idade
 e verifique se ele é maior de idade (idade igual ou 
 superior a 18 anos). Imprima uma mensagem informando
o resultado. */

function verificar_idade() {
    const idade = document.getElementById("idade").value
    console.log(idade)

    if (idade >= 18) {
        console.log("Maior de idade")
    }else if (idade > 0 && idade <= 17){
        console.log("Menor de Idade")
    }else{
        console.log("Dado invalido")
    }
}