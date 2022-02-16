//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//console.log(numbers);

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//let total = 0;

//for (let index = 0; index < numbers.length; index += 1) {
//    total += numbers[index];
//}
//console.log(total);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

let median = sum / numbers.length;

console.log(median);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

