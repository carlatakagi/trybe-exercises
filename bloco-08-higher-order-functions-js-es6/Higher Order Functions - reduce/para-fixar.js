const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85

// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaArray = (resultado, number) => {
  return resultado + number;
}

const somaResultado = numbers.reduce(somaArray);
console.log(somaResultado);

// faça uma função que some todos os números pares do array:
const pares = (numero) => numero % 2 === 0;
const somaPares = (numeroAtual, numero) => numeroAtual + numero;

const somaNumerosParesArray = (array) => array.filter(pares).reduce(somaPares);
console.log(somaNumerosParesArray(numbers));

// Solução usando apenas reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaParesReduce = (numeroAtual, numero) => (
  (numero % 2 === 0) ? numeroAtual + numero : numeroAtual
);

const somaNumerosPares = (array) => array.reduce(somaParesReduce, 0);
console.log(somaNumerosPares(numbers));