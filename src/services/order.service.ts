import { JwtPayload } from 'jsonwebtoken';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import { IOrder, ICreateOrder, IOrderService } from '../interfaces/order.interface';
import JWT from '../jwt/jwt';
import OrderValidation from './validations/order.validation';

class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll() : Promise<IOrder[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async createOrder(object : ICreateOrder) : Promise<IOrderService> {
    const { authorization, productsIds } = object as ICreateOrder;

    const authError = OrderValidation.authValidation(authorization);
    if (authError) return authError;

    const token = JWT.authToken(authorization) as JwtPayload;
    if (!token) return { code: 401, message: 'Invalid token' };

    const productIdError = OrderValidation.productsIdsValidation(productsIds);
    if (productIdError) return productIdError;

    const { result: { insertId: orderId }, id } = await this.model.createOrder(token);
    const result = await this.productModel.updateProduct(productsIds, orderId);

    if (result) return { code: null, message: { userId: id, productsIds } };

    return { code: 500, message: 'Some error ocurred' };
  }
}

export default OrderService;