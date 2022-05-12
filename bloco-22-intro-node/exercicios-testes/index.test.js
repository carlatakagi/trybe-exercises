const {expect} = require('chai');
const {verifyNumber} = require('./index.js');

describe('Valida o arquivo index', () => {
  describe('Valida a função verifyNumber', () => {
    it('Quando o número passado for maior que 0 deverá retornar "positivo"', () => {
      const number = 7;
      const result = verifyNumber(number);
  
      expect(result).to.be.equal('positivo');
    });
  
    it('quando for menor que 0 deverá retornar "negativo"', () => {
      const number = -1;
      const result = verifyNumber(number);
  
      expect(result).to.be.equal('negativo');
    });
  
    it('quando for menor que 0 deverá retornar "negativo"', () => {
      const number = 0;
      const result = verifyNumber(number);
  
      expect(result).to.be.equal('neutro');
    });
  
    it('Retorna uma mensagem de erro caso não seja um number', () => {
      const notNumber = '1';
      const result = verifyNumber(notNumber);

      expect(result).to.be.equals('o parâmetro deve ser um número');
    });

  });
  
  describe('Valida a função writeFile', () => {
    it('Valida o retorno da funcao possui um valor do tipo esperado', () => {

    });
  });
  
})
