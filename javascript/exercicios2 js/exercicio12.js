const numerosDiversos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const apenasPares = numerosDiversos.filter(function (numero) {
    return numero % 2 === 0;
})

console.log(apenasPares)