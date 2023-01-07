export interface ILens {
  degrees: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
}

export const mockedResponse:ILens & { _id: string }= {
  _id: '62cf1fc6498565d94eba52cd',
  degrees: 5,
  antiGlare: true,
  blueLightFilter: false,
}

export const lensMock: ILens = {
  degrees: 5,
  antiGlare: true,
  blueLightFilter: false,
}