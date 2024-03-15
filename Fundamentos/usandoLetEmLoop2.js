const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push (function ( ) {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//por let ser uma variável com escopo de bloco no momento que a função foi definida
//terá a memória de qual era o valor no momento chamado da função