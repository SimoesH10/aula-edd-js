/*Escreva um programa que solicite ao usuário três 
números e verifique qual é o maior entre eles. 
Imprima uma mensagem informando o resultado. */

function maior_numero() {
    const num1 = parseInt(document.getElementById("num1").value)
    console.log(num1)

    const num2 = parseInt(document.getElementById("num2").value)
    console.log(num2)

    const num3 = parseInt(document.getElementById("num3").value)
    console.log(num3)

    if (num1 > num2 && num1 > num3) {
        console.log("O primeiro é o maior")
    }else if (num2 > num1 && num2 > num3){
        console.log("O segundo é o maior")
    }else if (num3 > num1 && num3 > num2){
        console.log("O terceiro número é o maior")
    }else{
        console.log("Nenhum dos números é o maior")
    }
}


