function verificaSituacao (nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        return `Média: ${media.toFixed(1)}, Aprovado`
    } else if (media >= 5) {
        return `Média: ${media.toFixed(1)}, Recuperação`
    } else {
        return `Média: ${media.toFixed(1)}, Reprovado`
    }
}

console.log(verificaSituacao(8, 7.5, 9))
console.log(verificaSituacao(0, 7.5, 9))
console.log(verificaSituacao(1, 7.5, 0))