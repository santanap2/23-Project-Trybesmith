import connection from '../models/connection';
import OrderModel from '../models/order.model';
import IOrder from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll() : Promise<IOrder[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default OrderService;