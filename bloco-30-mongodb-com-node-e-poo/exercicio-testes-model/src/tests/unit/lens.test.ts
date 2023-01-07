import sinon from 'sinon';
import chai, { expect } from 'chai';
import { Model } from 'mongoose';
import lens from '../../../src/models/lens';
// mocha nao precisa importar vem por padrao
import { lensMock, mockedResponse } from '../mocks/mocks';


describe('Teste de unidade do método create referente a classe lens.', () => {
  before(() => {
    sinon.stub(Model, 'create').resolves(mockedResponse);
  });

  after(() => {
    sinon.restore();
    // (Model.create as sinon.SinonStub).restore(); - para restaurar so uma model
  });

  it('criando uma lente', async () => {
    const response = lens.create(lensMock);
    expect(response).to.be.equal(mockedResponse);
  });
});

describe('Teste de unidade do método readOne referente a classe lens.', () => {
  before(() => {
    sinon.stub(Model, 'findOne').resolves(mockedResponse);
  });

  after(() => {
    sinon.restore();
    // (Model.findOne as sinon.SinonStub).restore(); - para restaurar so uma model
  });

  it('procurando lentes', async () => {
    const response = lens.readOne(mockedResponse._id);
    expect(response).to.be.deep.equal(mockedResponse);
  });
});
