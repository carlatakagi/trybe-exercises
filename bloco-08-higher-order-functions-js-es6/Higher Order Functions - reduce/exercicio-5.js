// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, palavraAtual) =>
  // acc + palavraAtual por baixo dos panos 'junta' todas as strings para retornar um array
  // aí depois o reduce vai receber o acumulador e cada letra do array de todas as strings juntas
  // se a letra for a ou A, retorna o acumulador somando + 1
  // se nao for, dai permanece o acumulador
    acc + palavraAtual.split('').reduce((acumulador, letra) => {
      if(letra === 'a' || letra === 'A') {
        return acumulador + 1;
      }
      return acumulador;
  }, 0), 0);
}
console.log(containsA(names));