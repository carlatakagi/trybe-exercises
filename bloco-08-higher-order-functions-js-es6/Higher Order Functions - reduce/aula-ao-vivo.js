// SOMAR VALORES e GUARDAR
const numbers = [2, 3, 4, 6, 8, 12, 24];

// com FOR
let acumulador = 0;
for(let i=0; i< numbers.length ;i+=1){
  acumulador = acumulador + numbers[i];
}
console.log('somaTotal: ', acumulador)

// com hof REDUCE()
  // Assim como o map() pode retornar qualquer coisa
  // Possui um parametro que guarda a informação passada para ele no loop anterior.
  // No retorno externo retorno uma única informação (objeto, array, number, string)
const soma = numbers.reduce( (acumulator,item) => acumulator + item , 5)
console.log('soma: ', soma)

// com hofs FILTER() E REDUCE()
const somaFiltrados = numbers
  .filter( (item) => item < 8 )
  .reduce((acumulator,item) => acumulator + item )

console.log('somaFiltrados: ', somaFiltrados)


// ----------------------------------- //
const numbers1 = [5, 9, 58, 45, 22, 46];

const soma1 = numbers1.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`soma total: ${soma1}`);

// ---------------ACUMULAR E FORMAR UMA FRASE-------------------- //
const frase = ['fora', 'bolsonaro', 'genocida!!!'];

const foraBozo = frase.reduce((acumulador, palavra) => {
  return `${acumulador} ${palavra}`;
})
console.log(foraBozo);


// ---------------ACUMULAR OS VALORES DOS OBJETOS E GERAR UM NOVO OBJETO------------------- //
const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

const newPlayers = players.reduce( (acumulador,item)=> {
  acumulador[item.fullName] = item.email;  
  //console.log('dentro: ',acumulador[item.fullName] )      
  return acumulador
},{});
console.log(newPlayers);

console.log('newPlayers: ', newPlayers);