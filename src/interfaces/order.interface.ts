interface IOrder {
  id: number,
  userId: number,
  productsIds: number[],
}

interface ICreateOrder {
  productsIds: number[],
  authorization: any,
}

interface IObjModel {
  result: {
    insertId: number,
  },
  id: number,
}

interface IToken {
  id: number,
}

interface IOrderService {
  code?: number | null,
  message: string | object,
}

export {
  IOrder,
  ICreateOrder,
  IObjModel,
  IToken,
  IOrderService,
};