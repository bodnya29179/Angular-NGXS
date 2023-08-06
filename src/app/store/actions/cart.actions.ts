import { IProduct } from '../../interfaces';

export namespace CartAction {
  export class AddToCart {
    static readonly type = '[Cart] Add product to cart';

    constructor(public productId: IProduct['id']) {}
  }

  export class RemoveFromCart {
    static readonly type = '[Cart] Remove product from cart';

    constructor(public productId: IProduct['id']) {}
  }
}
