const retornaObjeto = {
  nomeDaChave: 'panduxinha',
  valorDachave: 50,
};

let novaChave = 'cor';
const cor = 'branca e preta';
retornaObjeto[novaChave] = cor;
novaChave = 'corPanda';
const corPanda = `A cor da ${retornaObjeto.nomeDaChave} é ${retornaObjeto.cor}`;
retornaObjeto[novaChave] = corPanda;
console.log(retornaObjeto);