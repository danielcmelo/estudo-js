const prod1 = {};//Assim como "[]" isso é um array, "{}" isso é um objeto
prod1.nome = 'Celular Ultra Mega';//criando um identificador(chave) dinamicamente dentro de um objeto
prod1.preco = 1200.60;
prod1['teste de espaço'] = 123;//Evitar usar atributos com espaço

console.log(prod1);

//Usando chave e valor dentro da própria declaração do objeto

const prod2 = {
    nome: 'Camisa Polo',
    preco: 230,
    obj:{
        blabla:123,
        obj:{
            blabla:456,
        }
    }
}

console.log(prod2)