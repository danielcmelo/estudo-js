//função normal
let dobro = function (a){
    return 2 * a
}

//função arrow
dobro = (a) =>{
    return 2 * a
}

//função arrow com retorno implícito. Usado para as funções com apenas uma linha
dobro = a => 2 * a

//funcao normal
let ola = function(){
    return 'Ola'
}

//refatorando o código para arrow com retorno implicito. 
ola = () => 'Ola'