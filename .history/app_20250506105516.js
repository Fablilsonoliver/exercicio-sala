const readline = require("readline-sync");

readline.question('Olá, mundo!');
function obterDiaDaSemana() {
    const numero = parseInt(prompt("Digite um número de 1 a 7:"));
  
    switch (numero) {
      case 1:
        alert("1 corresponde a Segunda-feira.");
        break;
      case 2:
        alert("2 corresponde a Terça-feira.");
        break;
      case 3:
        alert("3 corresponde a Quarta-feira.");
        break;
      case 4:
        alert("4 corresponde a Quinta-feira.");
        break;
      case 5:
        alert("5 corresponde a Sexta-feira.");
        break;
      case 6:
        alert("6 corresponde a Sábado.");
        break;
      case 7:
        alert("7 corresponde a Domingo.");
        break;
      default:
        alert("Número inválido. Por favor, digite um número de 1 a 7.");
    }
  }
  
  obterDiaDaSemana();
console.log();

