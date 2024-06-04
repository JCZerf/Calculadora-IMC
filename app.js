alert ('Calculadora de IMC');
let altura = prompt ('Digite a sua altura (Ex 1.75)');
let peso = prompt ('Digite o seu peso (Ex 90)');
let imc = 0;
calculoImc();

let resultadoNaPagina = document.querySelector ('h2');
    resultadoNaPagina.innerHTML = `Seu IMC é ${imc}`;

    function calcularImc () {
        imc = 0;
         altura = prompt ('Digite a sua altura (Ex 1.75)');
         peso = prompt ('Digite o seu peso (Ex 90)');
         calculoImc();
            resultadoNaPagina = document.querySelector ('h2');
            resultadoNaPagina.innerHTML = `Seu IMC é ${imc}`;
    }

    function calculoImc () {
        imc = (parseInt(peso / altura / altura));
        alert (`Seu IMC é ${imc}`);
            if (imc <= 18.4) {
                alert (`seu IMC ${imc} apresenta grau de magresa!`);
            } else {
                if (imc >= 25) {
                    alert (`Seu IMC ${imc} apresenta grau de obesidade!`);
                } else {
                    alert (`Seu IMC ${imc} é adequado!`);
                }
            }
        } 