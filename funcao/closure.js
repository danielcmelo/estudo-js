//closure é um escopo criado quando uma função é criada
//Esse escopo permite acessar e manipular variáveis externas

//contexto léxico em ação

const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())