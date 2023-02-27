/* 

    4. Faça um script para efetuar o índice de massa corporal

*/

const peso = parseInt(prompt('Digite seu peso'));
const altura = parseFloat(prompt('Digite sua altura'));

const imc = peso / (altura * altura);

document.getElementById('info').innerHTML = `seu imc é ${imc}`