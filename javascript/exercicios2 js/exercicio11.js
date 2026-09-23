function encontrarMaior (numeros){
    let maior = numeros [0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}

const lista = [14, 3, 3, 5, 6, 7, 8, 2, 1, 44, 54, 56]

console.log(`Maior número: ${encontrarMaior(lista)}`)