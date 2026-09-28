if (!localStorage.getItem('usuarios')) {

    const bancoInicial = [
        { usuario: 'admin', senha: '123' },
        { usuario: 'Sahh', senha: 'Victor' },
    ]

    localStorage.setItem('usuarios', JSON.stringify(bancoInicial))
}

document.getElementById('form').addEventListener('submit', function(e) {

    e.preventDefault()

    const usuarioDigitado = document.getElementById('usuario').value
    const senhaDigitado = document.getElementById('senha').value

    const usuarios = JSON.parse(localStorage.getItem('usuarios'))

    const usuarioEncontrado = usuarios.find(function(user) {
        return user.usuario === usuarioDigitado && user.senha === senhaDigitado
    })

    if (usuarioEncontrado) {
        alert('Login realizado com sucesso! Bem vindo ' + usuarioDigitado)
    } else {
        alert('Usuário ou senha incorreto.')
    }

})