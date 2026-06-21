const secreto = Math.floor(Math.random() * 100) + 1;

let palpite = Number(prompt("Adivinhe um número entre 1 e 100"));

while (palpite !== secreto) {

    if (palpite > secreto) {
        alert("Muito alto!");
    } else {
        alert("Muito baixo!");
    }

    palpite = Number(prompt("Tente novamente"));
}

alert("Parabéns! Você acertou.");