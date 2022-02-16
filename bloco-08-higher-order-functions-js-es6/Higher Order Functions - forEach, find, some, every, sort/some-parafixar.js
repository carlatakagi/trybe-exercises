// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const names = ['Mateus', 'José', 'Laura', 'Cláudia', 'Bruna'];

const hasName = (array, nome) => {
  //Adicione seu código aqui
  return array.some((nomeAtual) => nomeAtual === nome);
}

console.log(hasName(names, 'Laura'))
console.log(hasName(names, 'Panda'))