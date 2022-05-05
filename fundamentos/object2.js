console.log(typeof Object);
console.log(typeof new Object); //instanciando o objeto

const cliente = function () {};

console.log(typeof cliente);
console.log(typeof new cliente);

class produto {} //ES 2015 (ES6) / Forma diferente de se construir uma função
console.log(typeof produto);
console.log(typeof new produto());