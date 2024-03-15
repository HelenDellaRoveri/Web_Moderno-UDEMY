const pessoa = {
    saudacao: ' Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //! conflito entre paradigmas: funcional e Orientado a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa) //! o bind associa um objeto, "amarra" o objeto para eles ser executado e não dar o erro
falarDePessoa()

