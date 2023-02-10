import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertProduct(product: IProduct) : Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [product.name, product.amount],
    );
    const [rows] = result;
    const { insertId: id } = rows;
    return { id, ...product };    
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IProduct[];
  }

  public async updateProduct(productsIds: number[], orderId: number): Promise<object> {
    const query = 'UPDATE Trybesmith.products SET order_id = (?) WHERE id = (?)';
    const [result] = await Promise.all(
      productsIds.map((productId) => this.connection.execute(query, [orderId, productId])),
    );
    return result;
  }
}

export default ProductModel;
