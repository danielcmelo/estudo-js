//Armazenando uma função em uma variável ou constante
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(5, 2);

//Armazenando uma função arrow em uma variável(uma forma reduzida de criar uma funcao)
const soma = (a, b) =>{
    return a + b;
}

console.log(soma(2, 3));

//retorno implícito
const subtracao = (a, b) => (a - b);
console.log(subtracao(5, 3));