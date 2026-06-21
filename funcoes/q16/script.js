function modificarMatriz(matriz) {
    matriz[0][0] = 99;
}

let matriz = [
    [1, 2],
    [3, 4]
];

modificarMatriz(matriz);

console.log(matriz);