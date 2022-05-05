const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){//estou acrescentando no array uma função anônima
        console.log(i);
    })
}

funcs[2]()
funcs[8]()
