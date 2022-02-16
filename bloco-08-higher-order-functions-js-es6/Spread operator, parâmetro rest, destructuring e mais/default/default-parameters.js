const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// exemplo 1 - corrigindo a funcao acima
const greeting1 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting1(); // Welcome usuário!

// mesmo exemplo com ES6
const greeting2 = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting2(); // // Welcome usuário!