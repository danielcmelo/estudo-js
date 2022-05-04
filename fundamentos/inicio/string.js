//Aplicando funções que pertencem ao tipo string
const escola = 'Cod3r';
console.log(escola.charAt(4));//Vai me dar a letra que está no índice quatro da string
console.log(escola.charCodeAt(3));//Vai me dar o valor do índice dentro da tabela unicode
console.log(escola.indexOf(3));//vai me dar a posição dentro da string
console.log(escola.substring(1));//A string vai a partir do índice 1
console.log(escola.substring(0, 3));//A string vai a partir do índice 0 até o índice 3 sem incluir o índice 3

console.log('Escola '.concat(escola).concat("!"));//concatenação
console.log('Escola ' + escola + "!");//concatenação
console.log(escola.replace('C', 658));//substituição

console.log('Daniel,samuel,carlos'.split(','));//transformando string em array separados por vírgula