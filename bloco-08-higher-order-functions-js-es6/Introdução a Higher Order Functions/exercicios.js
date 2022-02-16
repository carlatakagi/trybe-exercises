// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// ao chamar a funcao newEmployees, irá gerar um objeto com três propriedades
const newEmployees = (employeeGenerator) => {
  const employees = {
    // o valor do id1 irá chamar a funcao employeeGenerator com o parametro pedro guerra e assim por diante
    id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeeGenerator = (fullName) => {
  // toLowerCase transforma maiuscula em minuscula; split separa cada uma das palavras em array ['carla', 'paiva']; join junta as palavras com o underline
  const email = fullName.toLowerCase().split(' ').join('_');

  // retorna o objeto com nome completo e o email; o join junta as palavras com o @trybe.com
  return {fullName, email: `${email}.join('@trybe.com')`};
}

console.log(newEmployees(employeeGenerator));

