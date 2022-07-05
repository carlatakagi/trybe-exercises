"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const monthsOfYear_1 = __importDefault(require("./monthsOfYear"));
const hemisferio = [
    'Norte',
    'Sul'
];
const meses = Object.keys(monthsOfYear_1.default);
const hemisferioEscolha = readline_sync_1.default.keyInSelect(hemisferio, 'qual hemisfério você está?');
const mesEscolha = readline_sync_1.default.keyInSelect(meses, 'em que mês estamos?');
console.log(hemisferioEscolha);
console.log(mesEscolha);
