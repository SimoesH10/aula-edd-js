/* Escreva um programa que solicite ao usuário um número
 e verifique se ele é primo. Imprima uma mensagem 
 informando o resultado. */

 function num_primo() {
    const num = parseInt(document.getElementById("num").value);

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(num + " não é primo");
            return;
        }else{
            console.log(num + " é primo");
        }
    }
    
}