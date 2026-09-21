function verificarParOuImpar (numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(verificarParOuImpar(7))
console.log(verificarParOuImpar(10))