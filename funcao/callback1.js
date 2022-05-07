const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
/*Callback - Passar uma função para outra função e quanto determinado evento acontecer essa função que vc passou 
vai ser chamada de volta*/

fabricantes.forEach(function (a){
    console.log(a)
})