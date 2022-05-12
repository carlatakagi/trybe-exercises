const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {})
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
function main() {
  readAll();
}

main();