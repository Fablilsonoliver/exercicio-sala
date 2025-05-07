
const readline = require("readline-sync");

readline.questionfunction qualDiaDaSemanaAlternativo() {
    const numero = parseInt(prompt("Digite um número de 1 a 7:"));
    const dias = ["", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
 
    if (numero >=1 && numero <=7) {
     alert('${numero}) corresponde a ${dias[numero]}.');
    }
    else {
     alert("Número inválido. Por favor, digite um número de 1 a 7.");
    }
}

qualDiaDaSemanaAlternativo();
console.log
