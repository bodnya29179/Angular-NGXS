import { IProduct } from '../../interfaces';

export namespace ProductAction {
  export class LoadProducts {
    static readonly type = '[Product] Load products';
  }

  export class AddProduct {
    static readonly type = '[Product] Add product';

    constructor(public productName: IProduct['name']) {}
  }

  export class EditProduct {
    static readonly type = '[Product] Edit product';

    constructor(public productId: IProduct['id'], public productName: IProduct['name']) {}
  }

  export class RemoveProduct {
    static readonly type = '[Product] Remove product';

    constructor(public productId: IProduct['id']) {}
  }
}
