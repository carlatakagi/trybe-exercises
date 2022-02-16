// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => 'Acordando!!';
console.log(wakeUp());

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const drinkCoffee = () => 'Bora tomar café!!';
console.log(drinkCoffee());

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleepTime = () => 'Partiu dormir!!';
console.log(sleepTime());

// Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const doingThings = (callback) => {
  const mensagemRetorno = callback();
  return mensagemRetorno;
}

console.log(doingThings(wakeUp));