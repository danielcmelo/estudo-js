const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);

valores[15] = 2065;
console.log(valores);

console.log(valores.length);//Me diz quantos elementos tem no array

valores.push({id: 3}, false, null, 'Teste');
console.log(valores);

console.log(valores.pop());//Ele pega o último valor do array me retorna e exclui
console.log(valores);

delete valores[0];//Outra forma de excluir um valor de um array, nesse caso esta removendo do índice 0
console.log(valores);

console.log(typeof valores);//Um array é um object

