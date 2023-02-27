/*

    5. Uma empresa decide dar um aumento de 30% aos funcionários com 
    salários inferiores a R$ 500,00. Faça um programa que receba o salário
    do funcionário e mostre o valor de salário reajustado ou uma mensagem
    caso ele não tenha direito ao aumento

*/

const contribution = parseInt(prompt('Digite seu salário'));

const salarioFinal = salarioInicial + 30;

if(salarioFinal >= 500) {
    document.getElementById('info').innerHTML = `seu salário final é ${salarioFinal}`;
} if(salarioFinal < 500) {
    document.getElementById('info').innerHTML = `você não tem direito do aumento${salarioFinal}`;
}