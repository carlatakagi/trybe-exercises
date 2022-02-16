const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const {name} = product;
console.log(name);

// exemplo 2
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

// qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável
const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// também é possível acessar um valor de um objeto e atribui-lo a uma variavel:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria

// exemplo 3 - usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas R$ ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas R$ 1899.05 é só aqui: Casas de Minas