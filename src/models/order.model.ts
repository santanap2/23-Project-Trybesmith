import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() : Promise<IOrder[]> {
    const query = `SELECT orders.id, orders.user_id AS userId,
    JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders INNER JOIN Trybesmith.products
    ON orders.id = products.order_id
    GROUP BY orders.id`;
    const [result] = await this.connection.execute(query);
    return result as IOrder[];
  }
}

export default OrderModel;
