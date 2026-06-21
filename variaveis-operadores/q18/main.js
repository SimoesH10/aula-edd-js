/*Escreva um programa que solicite ao usuário uma frase 
e conte quantas palavras essa frase contém. Imprima
 o resultado. */

function verificar_frase() {
    const frase = document.getElementById("frase").value
    console.log(frase)

    // função ".trim()" para remover espaços vazios no começo e no final da frase
    const fraseLimpa = frase.trim()

    // função ".split()" dividir frase em palavras usando o espaço como separador
    const palavras = fraseLimpa.split(" ")

    // função ".length()" para contar a quantidade de palavras
    const quantidade_palavras = palavras.length

    console.log(quantidade_palavras)
}