// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
let sum = 0;

for(let i = 0; i < 1001; i += 1) {
    sum += i;
}

console.log("a soma de 1 a 1000 é: " + sum);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.



//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let player1 = "pedra";
let player2 = "tesoura";

if (player1 == "pedra" && player2 == "papel") {
    console.log("Player 2 won");
} else if(player1 == "pedra" && player2 == "tesoura") {
    console.log("Player 1 won");
} else if(player1 == "papel" && player2 == "tesoura") {
    console.log("Player 2 won");
} else if(player1 == "tesoura" && player2 == "papel") {
    console.log("Player 1 won");
} else if(player1 == "tesoura" && player == "pedra") {
    console.log("Player 2 won");
} else if(player1 === "papel" && player === "pedra") {
    console.log("Player 1 won");
} else if(player1 == player2) {
    console.log("A ties");
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//var idadePessoa = 20;

//if (idadePessoa >= 18) {
//console.log ("A pessoa é maior de idade")
//}else if(idadePessoa < 18) {
//console.log ("A pessoa é menor de idade")
//}


//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let carol = 0;
let murilo = 0;

if(carol > murilo) {
    console.log("")
}
