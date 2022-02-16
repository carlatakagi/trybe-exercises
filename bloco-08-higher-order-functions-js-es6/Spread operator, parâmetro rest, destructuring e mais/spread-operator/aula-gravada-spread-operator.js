const carros = ["honda civic", "jeep renegade", "novo fusca"];
const motos = ["harley", "biz"];

// ...array => ... é o spread operator que une/espalha os arrays na ordem que for colocado
// também podemos adicionar info assim como o "mobi" foi adicionado
const veiculos = [...carros, "mobi", ...motos];

console.log(veiculos);

// exemplo 2 com objetos
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: false,
}

const pessoa = {
  nome: "carla",
  idade: 25,
  cidade: "campo grande",
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  hobby: "dança",
}
console.log(pessoaTryber);