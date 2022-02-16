const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// exemplo com função
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// exemplo com funcao pronta
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// exemplo com objetos
const people = {
  id: 13,
  name: 'carla',
  age: 25,
};

const about = {
  address: 'Madrid, Spain',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); 
/* retorna: 
{
  id: 13,
  name: 'carla',
  age: 25,
  address: 'Madrid, Spain',
  occupation: 'Developer'
}*/