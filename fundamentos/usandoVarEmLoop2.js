const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){//estou acrescentando no array uma função anônima
        console.log(i);
    })
}

funcs[2]()
funcs[8]()
//Irá imprimir 10 nos dois, pois var não tem escopo de bloco