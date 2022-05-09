const produto = new Object
produto.nome = 'cadeira',
produto['Marca do produto'] = 'Genérica',
produto.preco = 220

console.log(produto)
delete produto.nome
console.log(produto)

const carro = {
    modelo: 'A4',
    modelo: 89000,
    proprietario:{
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro:'Rua abc',
            numero:123,
        }
    },
    condutores:[{
        nome:'Daniel',
        idade:19,
    },{
        nome:'Ana',
        idade:20,
    }],
    calcularValorSeguro: function(){
        //....
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua naumTim'
console.log(carro)