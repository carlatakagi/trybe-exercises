// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'melancia', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'aveia', 'leite ninho'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitAndAdditional = [...specialFruit, ...additionalItens];
  return fruitAndAdditional;
};

console.log(`Quero uma salada de fruta com os seguintes itens: ${fruitSalad(specialFruit, additionalItens).join(', ')}.`);