//var só tem dois escopos - Global e function;
{
    {
        {
            {
                var sera = 'sera';
            }
        }
    }
}

console.log(sera)

function teste(){
    var soma = 213;
}

soma();
console.log(soma);