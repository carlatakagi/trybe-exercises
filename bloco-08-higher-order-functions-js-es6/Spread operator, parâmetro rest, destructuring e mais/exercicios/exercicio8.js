// exercicio 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// escreva greet abaixo
// como não são todos que podem ter o parametro saudacao, atribui um valor caso nao exista
const greet = (nome, saudacao = 'Hi') => `${saudacao}, ${nome}!`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'