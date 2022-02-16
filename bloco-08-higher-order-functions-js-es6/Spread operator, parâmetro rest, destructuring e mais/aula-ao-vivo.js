// funcao que soma todos os valores de um array sem saber quantos parâmetros terá o array
// utilizando rest e reduce
const sumAll = (...values) => {
  return values.reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(sumAll(1, 3, 5));
console.log(sumAll(1, 3, 5, 6, 9));
console.log(sumAll(1, 3, 5, 6, 9, 15, 24));
console.log(sumAll(1, 3, 5, 6, 9, 15, 24, 88));

// funcao que obtenha seis dados de data e hora
const formatDate = (year, month, day, hour, minutes, seconds) => {

  return `${day}/${month}/${year}`;
}

console.log(formatDate('1996', '1', '18','09', '10', '56'));