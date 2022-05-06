const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 2}. ${nome}`)
}

fabricantes.forEach(imprimir)