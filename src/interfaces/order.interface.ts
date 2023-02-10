interface IOrder {
  id: number,
  userId: number,
  productsIds: number[],
}

interface IOrderToken {
  authorization: any,
  productsIds: number[],
}

interface IObjModel {
  result: object,
  id: number,
}

// interface IToken {
//   id: number,
//   username: string,
//   vocation: string,
//   level: number,
//   password: string,
//   iat: number
// }

// interface ITest {
//   token: IToken,
//   productsIds: number[]
// }

export {
  IOrder,
  IOrderToken,
};
