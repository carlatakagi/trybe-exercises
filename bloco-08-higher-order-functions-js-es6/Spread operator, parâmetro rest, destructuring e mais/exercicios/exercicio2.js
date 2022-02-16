// exercicio 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// escreva sum abaixo
// rest é utilizado pois nao sabemos quantos parametros iremos receber
const soma = ((...numeros) => numeros
  .reduce(((acumulador, valor, index) => {
    console.log(index, 'acumulador', acumulador);
    console.log(index, 'atual', valor);
    
    return acumulador + valor;
  }), 0));

console.log(soma(3, 4, 5));

/* retorno:
0 acumulador 0
0 atual 3
1 acumulador 3
1 atual 4
2 acumulador 7
2 atual 5
12
*/

/* const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);
console.log(sum(3, 4, 5)); */

