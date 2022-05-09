const a = 1;
const b = 2;
const c = 3;

//Antes do ES15
const obj1 = {a: a, b: b, c: c}

//Depois do ES15
const obj2 = {a, b, c}

console.log(obj1, obj2)

const obj5 = {
    function: function() {
        
    },
    funcao(){
        //forma reduzida criada a partir da versao 5 do js
    }
}