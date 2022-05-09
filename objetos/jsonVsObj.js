//convertendo obj em json
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + c + b
    }
}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}'))