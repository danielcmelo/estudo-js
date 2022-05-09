// const sequencia = {
//     _valor: 1, //convenção - Variável que se deve mexer apenas internamente
//     get valor(){
//         return this._valor++
//     }
//     set valor(valor){
//         if(valor > this._valor){
//             this._valor = valor
//         }
//     }
// }
let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "Português",
 
    get linguagem() {
      return this.idioma = 'zaqueu'
    },
 
  }
console.log(Pessoa.linguagem)
console.log(Pessoa)
console.log(Pessoa)