//factory é uma função que retorna um objeto
//Ao invés de criar vários objetos, é usado a função factory

//factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Pascal'
    }
}

console.log(criarPessoa())