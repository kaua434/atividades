// Atividade 01

/*
    Faça um algoritmo que leia o ano de nascimento de uma pessoa, calcule
    também, verifique e mostre se ela já tem idade para votar (16 anos)
    e para conseguir a carteira de habilitação ( 18 anos )
*/

const idadeDirigir = 18;
const idadeVotar = 16;


let idadeAtual;

let anoAtual = new Date();

let anoNascimento = parseInt(prompt('Digite o ano que você nasceu:'));

idadeAtual = anoAtual.getFullYear() - anoNascimento;

if(idadeAtual >= idadeVotar && idadeAtual < idadeDirigir) {
    document.getElementById('info').innerHTML = `você tem ${idadeAtual} anos, pode votar e não pode dirigir`
} else if (idadeAtual >= 18) {
    document.getElementById('info').innerHTML = `você tem ${idadeAtual} anos, pode votar e dirigir`
} else {
    document.getElementById('info').innerHTML = `você não tem idade para votar e dirigir`
}