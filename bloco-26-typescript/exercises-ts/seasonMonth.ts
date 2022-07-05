import readline from "readline-sync";
import MonthsOfYear from "./monthsOfYear";
import SeasonsOfYear from "./seasonsOfYear";

const hemisferio = [
  'Norte',
  'Sul'
];

const meses = Object.keys(MonthsOfYear);

const hemisferioEscolha: number = readline.keyInSelect(hemisferio, 'qual hemisfério você está?');

const mesEscolha: number = readline.keyInSelect(meses, 'em que mês estamos?');

/* const estacaoDoAno: string = (hemisferio: number, meses: number) => {
  if (hemisferio === 0) {

  }
} */
/* console.log(hemisferioEscolha);
console.log(mesEscolha); */