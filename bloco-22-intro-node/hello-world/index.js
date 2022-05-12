import readline from 'readline-sync'

//const readline = require('readline-sync');

const imc = require('./imc');

const askName = () => {
  return readline.question('qual é seu nome?');
}

const askHeight = () => {
  return readline.questionFloat('qual é sua altura?');
}

const askWeight = () => {
  return readline.questionFloat('qual é seu peso?');
}

//const askName = askName();