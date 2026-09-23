const precosOriginais = [100, 250, 80, 1500]

const precosComDesconto = precosOriginais.map(function (preco) {
    return preco * 0.9
})

console.log(precosComDesconto)