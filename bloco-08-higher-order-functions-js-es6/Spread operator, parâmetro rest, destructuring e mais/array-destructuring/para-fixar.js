// exercicio 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacaoOla, funcaoRealizaSaudacao] = saudacoes;
console.log(saudacaoOla)
console.log(funcaoRealizaSaudacao(saudacaoOla)); 

// exercicio 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// primeiro array é com os nomes das variaveis criadas anteriormente -- segundo array é o valor das variaveis so que na ordem que corresponde cada variavel 
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida) // retorno: água arroz gato

// exercicio 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// a virgula para os numeros impares e utilizar um sprad operator para adicionar o array
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);