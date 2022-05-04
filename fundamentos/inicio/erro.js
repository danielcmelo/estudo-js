//Tratamentos de erro

/*
function imprimirNomeGritado(obj){
    console.log(obj.name.toUpperCase() + '!!!')
};

const obj = {
    nome: 'Daniel'
};

imprimirNomeGritado(obj);
*/

//try é um bloco de código que comporta um determinado código que eu julgo errado 
//catch é usado logo após o try pra ser como uma alternativa
//throw é para lançar algum erro
//finally é um blaco que independente do que acontecer ele vai ser impresso
function tratarErroELancar(erro){
    throw new Error('...');
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');   
    }catch(e){
        tratarErroELancar(e);
    }
    finally{
        console.log('acabou');
    }
};
