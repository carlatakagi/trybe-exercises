// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome (string) {
  for(index in string) {
    if(string[index] != string[(string.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

//  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorValorIndice (array) {
  let indiceMaior = 0;
  for(let indice in array) {
    if (array[indiceMaior] < array[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(maiorValorIndice([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorValorIndice(array) {
  let indiceMenor = 0;
  for(let indice in array) {
    if (array[indiceMenor] > array[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(menorValorIndice([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Juliana', 'Cairo', 'Joana']));

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaTodosNumeros(array) {
  let total = 0;
  for (var i = 0; i <= array; i += 1) {
    total += i;
  }
  return total;
}
console.log(somaTodosNumeros(5));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verificaFinalDaPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  let resultado = true;

  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      resultado = false;
    }
  }
  return resultado;
}