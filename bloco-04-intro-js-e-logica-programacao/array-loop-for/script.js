
// array 
let pizzas = ['4 queijos', 'palmito', 'marguerita', 'frango com catupiry', 'chocolate'];
// a posição sempre começa com 0, 1, 2,3........

//adiconar/alterar valores no array - colocar a posição entre parenteses
//pizzas[5] = 'peito de peru';

// adicionar valor no array na ultima posição (quando nao sabe a posição certa)
pizzas.push('portuguesa');

// saber quantos elementos existem no array
//pizzas.length

//colocar array em ordem
//pizzas.sort()

// 
//console.log(pizzas[]);

//laço de repetição

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}