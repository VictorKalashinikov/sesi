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
        localStorage.setItem('usuarioLogado', usuarioDigitado)
        window.location.href = 'home.html'
    } else {
        alert('Usuário ou senha incorreto.')
    }

})

const btnTreinoA = document.getElementById('btnTreinoA')
if(btnTreinoA){
    const usuarioLogado = localStorage.getItem('usuarioLogado')
    if(!usuarioLogado){
        window.location.href = 'index.html'
    }
}

const trinos = {
    A: {
        titulo: 'Treino A: Peito e Triceps',
        exercicios: [
            'supino reto - 4x10',
            'Voador - 3x12',
            'cruscifixo inclinidado - 3x15',
            'tricipes corda 4x10',
            'tricipes Frances 4x10'
        ]
    },
    B: {
        titulo: 'Treino B: Costa e Bicipes',
        exercicios: [
            'Puxada Frontal - 4x10',
            'Remada Curvada - 4x10',
            'Remada Baixa - 3x12',
            'Rosca Direta - 4x10',
            'Rosca Martelo - 3x12'
        ]
    },

    C: {
        titulo: 'Treino C: Pernas e Ombros',
        exercicios: [
            'Agachamento Livre - 4x10',
            'Leg press - 4x10',
            'Panturrilha Máquina - 3x12',
            'Cadeira Adutora - 4x10',
            'Elevação pelvica - 3x12'
        ]
    }
}

function exibirTreino(tipo){
    const dados = treinos [tipo]
    document.getElementById('tituloTreino').textContent = dados.titulo

    const lista = document.getElementById('listaExercicios')
    lista.innerHTML = ''

    dados.exercicios.array.forEach(function(exercicio){
        const li = document.createElement('li')
        lista.appendChild(li)
    });
}

btnTreinoA.addEventListener('click', function(){
    exibirTreino(A)
})


document.getElementById('btnTreinoB').addEventListener('click', function(){
    exibirTreino(B)
})

document.getElementById('btnTreinoC').addEventListener('click', function(){
    exibirTreino(C)
})

document.getElementById('btnVoltar').addEventListener('click', function(){
    window.location.href='home.html'
})