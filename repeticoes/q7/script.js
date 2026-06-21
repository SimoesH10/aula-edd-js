const n = Number(prompt("Quantidade de termos:"));
    const a1 = Number(prompt("Primeiro termo:"));
    const r = Number(prompt("Razão da PA:"));

    const termos = document.getElementById("termos");

    let soma = 0;
    let termoAtual = a1;

    for (let i = 1; i <= n; i++) {

        termos.innerHTML += `<li>${termoAtual}</li>`;

        soma += termoAtual;

        termoAtual += r;
    }

    document.getElementById("soma").textContent =
        `Soma dos termos: ${soma}`;