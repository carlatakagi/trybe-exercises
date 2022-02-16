// Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => 'Acordando!!';
console.log(wakeUp());

// Crie outra função que retorne a string 'Bora tomar café!!' ;
const coffee = () => 'Bora tomar café!!';
console.log(coffee());

// Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleepTime = () => 'Partiu dormir!!';
console.log(sleepTime());

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. 
// Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const doingThings = (func) => {
  const mensagem = func();
  return mensagem;
}
console.log(doingThings(wakeUp));
console.log(doingThings(coffee));
console.log(doingThings(sleepTime));