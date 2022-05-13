const fs = require('fs');

// fs com promise
// pode usar async sem await
// readFileSync é sincrono
// como o readFile está dentro da funcao assincrona quando chamar a funcao
// recebe uma promise
//se der certo resolve
// se der falha rejeita
// neste caso o readFileSync age como uma promise
const getSimpsons = async (path) => JSON.parse(fs.readFileSync(path)); 

module.exports = {
  getSimpsons,
};