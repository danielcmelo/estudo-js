//Object.preventExtension -> previne o fato de estender, adicionar novos atributos
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco: 2123
})

console.log('Extensivel: ', Object.isExtensible(produto))//verifica se foi setado Object.preventExtension

produto.nome = 'borracha'
produto.descricao = 'blabnla'
delete produto.preco
console.log(produto)

//Object.seal -> Não consegue adicionar nem excluir atributos
const pessoa = {nome: 'Ricardo', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.nome = 'borracha'
pessoa.descricao = 'blabnla'
delete pessoa.idade

console.log(pessoa)

//Object freeze -> seal + extension
 