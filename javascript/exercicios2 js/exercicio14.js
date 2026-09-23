function contarFrequencia (itens) {
    const contagem = {}

    for (const item of itens) {
        if (contagem[item]) {
            contagem[item] ++
        } else {
            contagem[item] = 1
        }
    }
    return contagem
}

const votos = ['maca', 'banana', 'maca', 'banana', 'maca', 'banana', 'laranja', 'banana', 'laranja',]
console.log(contarFrequencia(votos))