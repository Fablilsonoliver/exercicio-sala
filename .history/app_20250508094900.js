
const readline = require("readline-sync");

// // 1 - Solicita ao usuário um número de 1 a 7
// let numero = parseInt(readline.question("Digite um numero de 1 a 7: "));

// // Array com os dias da semana (índice 0 é Segunda-feira)
// let diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

// // Verifica se o número está entre 1 e 7
// if (numero >= 1 && numero <= 7) {
//         console.log("O dia correspondente é:", diasDaSemana[numero - 1]);
//     } else {
//             console.log("Número inválido. Por favor, digite um número de 1 a 7.");
//         }


        // 3 - Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). Dependendo da quantidade, o preço unitário varia:
        // Quantidade de hotdogs
        // Preço por unidade (centavos)
        // n < 5
        // 100
        // 5 ≤ n < 10
        // 95
        // n ≥ 10
        // 90
         
        // function vendaHotDogs (n) {
        //     let precoUni;
        
        //     if ( n < 5) {
        //         precoUni = 100;
        //     }
        
        //     else if (n >= 5 && n < 10){
        //         precoUni = 95;
        //     }
        
        //     else {
        //         precoUni = 90;
        //     }
        
        
        //   console.log(`\nVocê comprou ${n} hotdog(s).`);
        //   console.log(`Preço unitário: ${precoUni} centavos`);
           
        // }
        
        // // Solicita ao usuário a quantidade de hotdogs
        // let quantidade = parseInt(readline.question("Digite a quantidade de hotdogs que deseja comprar: "));
        
        // // Chama a função
        // vendaHotDogs(quantidade);


// //4 - Escreva uma função que remova todas as vogais de uma string de entrada.
// // Exemplo:
// // "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

// function removeVogais(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }

// // Solicita ao usuário para digitar a frase
// let frase = readline.question("Digite uma frase para remover as vogais: ");

// // Chama a função e exibe o resultado
// let resultado = removeVogais(frase);
// console.log("Frase sem vogais:", resultado);

// 6 - Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor.
// No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

// let nomes = [];
//     // Lê 7 nomes do usuário
// for (let i = 0; i < 7; i++) {
//     let nome = readline.question(`Digite o nome da pessoa ${i + 1}: `);
//     nomes.push(nome);
// }

// // Exibe os nomes na ordem inversa
// console.log("\nNomes na ordem inversa:");
// for (let i = nomes.length - 1; i >= 0; i--) {
//     console.log(nomes[i]);


// }

2-
const menuDeCadastro = ()
