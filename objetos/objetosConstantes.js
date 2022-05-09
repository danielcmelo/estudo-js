const pessoa = {nome: 'Joao'}

//Como não mudar mais o objeto
Object.freeze(pessoa)//Depois que eu congelo o objeto, não consigo mexer mais
pessoa.nome = 'Carlos'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)