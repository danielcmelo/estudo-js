const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
};
pessoa.falar();

const falar = pessoa.falar;
falar()//Conflito entre funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);//especifica o contexto local que eu estou apontando
falarDePessoa()
console.log()