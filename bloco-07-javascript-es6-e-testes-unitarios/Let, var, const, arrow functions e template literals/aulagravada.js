function minhaIdade() {
  //var idade = 25; // variavel dentro da funçao só funciona dentro
for(const idade = 78; idade <= 100; idade += 1) {
  console.log(idade);
}
  console.log('Fora do for', idade);

  // if(true) {
  //   let nome = 'trybe'; // nao tem problema de escopo
  // }

  // console.log('Fora do if', nome);
}

minhaIdade();

/// arrow functions
