function tratarErroELancar(erro){
    //throw new Error(' not found 440s')
    //throw 10
    //throw true
    //throw 'mensagem' 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }   
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.nome.toUpperCAse() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)