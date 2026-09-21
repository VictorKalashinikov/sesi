const livro = {
    titulo: "Dom Casmurro",
    autor: 'Machado de Asis',
    paginas: 256,
    descrever: function() {
        console.log(
            "O livro " + this.titulo + ' foi escrito por ' + this.autor + 'e tem ' + this.paginas + ' páginas'
        )
    }
}