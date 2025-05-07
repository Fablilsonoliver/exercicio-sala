
const readline = require("readline-sync");

// 1 - Solicita ao usuário um número de 1 a 7
let numero = parseInt(readline.question("Digite um numero de 1 a 7: "));

// Array com os dias da semana (índice 0 é Segunda-feira)
let diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

// Verifica se o número está entre 1 e 7
if (numero >= 1 && numero <= 7) {
    console.log("O dia correspondente é:", diasDaSemana[numero - 1]);
} else {
    console.log("Número inválido. Por favor, digite um número de 1 a 7.");
}

//4 - Escreva uma função que remova todas as vogais de uma string de entrada.
// Exemplo:
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

function removeVogal(str) {
    return str.replace(/[aeiouAEIOU]/ )
}
