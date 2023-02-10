import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';
import IError from '../interfaces/error.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async insertProduct(product: IProduct) : Promise<IError> {
    const { name, amount } = product;

    if (typeof name !== 'string') {
      return { type: 'NOT_STRING', message: '"name" must be a string' };
    }
    if (typeof amount !== 'string') {
      return { type: 'NOT_STRING', message: '"amount" must be a string' };
    }
    if (name.length < 3) {
      return { type: 'LENGTH_ERROR', message: '"name" length must be at least 3 characters long' };
    }
    if (amount.length < 3) {
      return { 
        type: 'LENGTH_ERROR', 
        message: '"amount" length must be at least 3 characters long',
      };
    }

    const result = await this.model.insertProduct(product);
    return { type: null, message: result };
  }

  public async getAll() : Promise<IProduct[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default ProductService;