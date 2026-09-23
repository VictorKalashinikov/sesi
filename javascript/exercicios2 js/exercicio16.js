function calcularNotas(valor){
    const cedulas = [100, 50, 20, 10]
    const resultado = {}
    let restante = valor

    for (const cedula of cedulas){
        const quantidade = Math.floor(restante/cedula)
        if (quantidade > 0){
            resultado[cedula] = quantidade
            restante = restante % cedula
        }
    }
    return resultado
}

console.log(calcularNotas(6769))