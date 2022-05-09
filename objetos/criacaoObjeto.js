//Usando notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


//funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoDesconto = () =>{
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('caneta', 7.99, 0.10)
const p2 = new Produto('carro', 89067.99, 0.15)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

//funcao factory
function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Ana', 10980, 2)
console.log(f1.getSalario(), f2.getSalario())

//Obj.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)