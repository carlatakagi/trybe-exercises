// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
function soma (num1, num2) {
  return num1 + num2;
}
console.log(soma(10, 2));

function sub (num1, num2) {
  return num1 - num2;
}
console.log(sub(10, 2));

function div (num1, num2) {
  return num1 / num2;
}
console.log(div(10, 2));

function mult (num1, num2) {
  return num1 * num2;
}
console.log(mult(10, 2));

function resto (num1, num2) {
  return num1 % num2;
}
console.log(resto(10, 2));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
function maiorDeDois (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(maiorDeDois(1, 2));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorDeTres (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maiorDeTres(30, 20, 10));
console.log(maiorDeTres(10, 30, 20));
console.log(maiorDeTres(10, 20, 30));

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.
function positivoNegativo (numero) {
  if (numero <= 0) return 'negative';
  return 'positive';
}
console.log(positivoNegativo(0));
console.log(positivoNegativo(-5));
console.log(positivoNegativo(10));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function triangulo (lado1, lado2, lado3) {
  let somaDosLados = Math.abs(lado1 + lado2 + lado3);

  if (somaDosLados === 180) return true;
  return false;
}
console.log(triangulo(100, 40, 40));
console.log(triangulo(10, 10, 50));