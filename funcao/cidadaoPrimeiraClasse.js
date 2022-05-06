 //Conceito de função first class objects 

 //Criar função de forma literal
 function fun1() {

 };
 //retorno de uma função em js é opcional

 //É possível armazenar em uma variável
 const fun2 = function () {}; //atribuição de função anônima

 //Armazenar em um array
 const array = [function (a, b) {
     return a + b
 }];
 console.log(array[0](2, 3));

 //armazenar em um atributo de objeto
 const obj = {};
 obj.falar = function () {
     return 'Opa'
 };
 console.log(obj.falar());

 //passar função com parâmetro para outra função
 function run(fun){
     fun()
 };

 run(function(){console.log('Executando')});

 //retornar uma função como parâmetro
 function soma(a, b){
     return function(c){
         console.log(a+ b + c)
     }
 }

 soma(2, 3)(4);