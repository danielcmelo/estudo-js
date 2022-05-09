//Novo recurso ES15
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

// const {
//     nome,
//     idade
// } = pessoa; //operador destructuring
// console.log(nome, idade);
// console.log(pessoa);
//seleciono o par, solicito que os valores x sejam removidos e informo o nome da minha chave/valor

const {
    nome: teste,
    idade: teste2
} = pessoa;
console.log(teste, teste2);
//Nesse caso, utilizo o destructuring para alterar o nome das variáveis

// const {
//     sobreNome,
//     bemHumorada = true
// } = pessoa;
// console.log(sobreNome, bemHumorada);

// const {
//     endereco: {
//         logradouro,
//         numero
//     }
// } = pessoa;
// console.log(logradouro, numero);