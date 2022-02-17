const service = require('./service');

describe('Testa a função randomNumbers', () => {
  it('teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    // mockar o retorno da funcao, com o padrão 10 para depois verificar se foi chamada
    service.randomNumbers = jest.fn().mockReturnValue(10);

    expect(service.randomNumbers()).toBe(10);
    expect(service.randomNumbers).toHaveBeenCalled();
    expect(service.randomNumbers).toHaveBeenCalledTimes(1);
  })
})