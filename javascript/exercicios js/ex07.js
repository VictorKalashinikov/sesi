function somarNumeros (lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    } return soma
}

const valores = [10, 20, 30, 40, 50]
console.log(`Soma total: ${somarNumeros(valores)}`)