const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// com shorthand nao precisa atribuir id ao id, e assim por diante
const newUser1 = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser1(56, 'sandra', 'sandra@email.com')); // { id: 56, name: 'sandra', email: 'sandra@email.com' }