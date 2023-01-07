import { ILens, mockedResponse } from '../tests/mocks/mocks';

export default class Lens {
  static readOne = (id: string):ILens => {
    console.log(id);
    return mockedResponse;
  };

  static create = (obj: ILens):ILens & { _id: string } => {
    console.log(obj);
    return mockedResponse;
  };
}