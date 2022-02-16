const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(nationality); // retorna undefined pois nationality não é uma chave do objeto person

// atribuindo valor a uma nova chave
const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality1 = 'Brazilian' } = person1;
console.log(nationality1); // Brazilian

// exemplo 3 
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0