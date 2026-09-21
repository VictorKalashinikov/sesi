const idadeVotante = 17

if (idadeVotante < 16) {
    console.log('Não pode votar')
} else if (idadeVotante >= 16 && idadeVotante <= 17 || idadeVotante > 70) {
    console.log('Voto Facultativo')
} else {
    console.log('Voto Obrigatório')
}