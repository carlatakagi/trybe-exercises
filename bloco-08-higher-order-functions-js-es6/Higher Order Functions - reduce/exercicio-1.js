// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // acumulador é a variavel que vai acumular os valores que
  // currentValue é a variavel do valor atual
  // concatenar os valores .concat
  // [] colocar entre brackets
  return arrays.reduce((acumulador, currentValue) => acumulador.concat(currentValue), []);
}

console.log(flatten(arrays));