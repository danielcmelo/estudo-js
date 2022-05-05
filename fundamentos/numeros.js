const peso1 = 1.0;
const peso2 = Number('2.0');//transformando uma string em number

console.log(peso1, peso2);
console.log(typeof peso2);
console.log(typeof peso1);

//-----------------------------------

console.log(Number.isInteger(peso1));//verificando se o valor é um número inteiro

//-----------------------------------

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso2 + peso2);

console.log(media);
console.log(media.toFixed(2));//definindo o número de casas flutuantes