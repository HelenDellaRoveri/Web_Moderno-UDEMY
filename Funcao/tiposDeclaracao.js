console.log(soma(3, 4)) //* funciona nesse cenário por conta que primeiro o interpretador em JS lê as funções
//! porém a function expression e a named function expression não ocorre isso  

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}

//named function expression
const multi = function multi(x, y){
    return x * y
}

//
