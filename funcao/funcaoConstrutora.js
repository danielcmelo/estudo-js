function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado. Que pertence apenas a essa função
    let velocidadeAtual = 0;

    //Método público
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())  