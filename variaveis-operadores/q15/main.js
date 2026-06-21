/* Escreva um programa que solicite ao usuário um número 
e calcule a sua raiz quadrada. Mostre o resultado na tela. */

function raiz_numero() {
    const num = document.getElementById("num").value
    console.log(num)

    /*Math.sqrt() função utilizada para calcular raiz */
    const raiz = Math.sqrt(num)

    console.log(raiz)
}


/* calcular raiz com o operador de '**' expoentes
let raiz = 9 ** 0.5; // Retorna 3 [6] */