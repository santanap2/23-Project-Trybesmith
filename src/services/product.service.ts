import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async insertProduct(product: IProduct) : Promise<IProduct> {
    const result = await this.model.insertProduct(product);
    return result;
  }

  public async getAll() : Promise<IProduct[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default ProductService;