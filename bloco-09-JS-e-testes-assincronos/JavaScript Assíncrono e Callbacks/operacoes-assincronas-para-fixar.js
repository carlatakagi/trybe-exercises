// exemplo 1
const pushNumber1 = (list, number) => list.push(number);

let numbers1 = [];

pushNumber1(numbers1, 1);
pushNumber1(numbers1, 2);
pushNumber1(numbers1, 3);

console.log(numbers1);

// exemplo 2
const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

console.log(numbers2); // O retorno é [2, 3]

// exemplo 3
const pushNumber3 = (list, number) => list.push(number);

let numbers3 = [];

setTimeout(() => pushNumber3(numbers3, 1), 3000);
pushNumber3(numbers3, 2);
pushNumber3(numbers3, 3);

setTimeout(() => console.log(numbers3), 3000);