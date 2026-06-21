const palavraSecreta = "termo";

let tentativa = "";
let contador = 0;

while (tentativa !== palavraSecreta) {

    tentativa = prompt("Digite uma palavra de 5 letras:");

    contador++;

    if (tentativa !== palavraSecreta) {
        alert("Palavra incorreta!");
    }
}

alert(`Você acertou em ${contador} tentativa(s)!`);