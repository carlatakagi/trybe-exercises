let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    //controlar em qual posição/coluna estamos naquela linha
    for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
        //verificação para ver se estamos na posição/coluna na qual queremos começar a imprimir os asteriscos naquela linha
        if (columnIndex < inputPosition) {
            //se a coluna atual for menor que a coluna que quero começar a imprimir meu asterisco irei acrescentar espaço em branco À variavel que ser aimpressa no final de cada repetição
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}