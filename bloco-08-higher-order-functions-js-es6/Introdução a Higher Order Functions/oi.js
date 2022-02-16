const qualComercial = (arr) => {

  const menor = arr.some((c) => c < 18); 
  
  if(menor) return 'ChocoTrybe, melhor que console.log';
  return 'Beba Trybeer, suave como um log de erro vazio';
  
} 


const sumFixAmount = (amount) => {
  return (number) => amount + number;
}
 
const initialSum = sumFixAmount(15)
console.log(initialSum(15));

/**********************/
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

/***************************/
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());