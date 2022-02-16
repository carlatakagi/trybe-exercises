/*******************ORDENAR LETRAS**************************/
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


/*******************ORDENAR NUMEROS - ORDEM CRESCENTE**************************/
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // COMPARA O PRIMEIRO COM O SEGUNDO
console.log(points); // [1, 5, 10, 25, 40, 100]


/*******************ORDENAR NUMEROS - ORDEM DECRESCENTE**************************/
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]