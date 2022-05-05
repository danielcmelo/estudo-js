let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Transformar valor em booleano

isAtivo = 1;
console.log(!!isAtivo); //"!" significa negativa. Para saber se um valor é verdadeiro ou falso "!!".
console.log('Os verdadeiros...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');//Espaço em branco
console.log(!!'texto');
console.log(!![ ]);
console.log(!!{ });
console.log(!!Infinity);
console.log(!!(isAtivo = true));//Se o RESULTADO é verdadeiro

console.log('Os Falsos...');
console.log(!!0);
console.log(!!'');//String vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log()



