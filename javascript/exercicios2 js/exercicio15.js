const usuarios = [
    {nome: 'Ben', idade: 10},
    {nome: 'BAn', idade: 12},
    {nome: 'BOn', idade: 14},
    {nome: 'BUn', idade: 18},
]

function filtarMotorista(lista) {
    return lista.filter(function(usuario){
        return usuario.idade >= 18
    })
}

console.log(filtarMotorista(usuarios))