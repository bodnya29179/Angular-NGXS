import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class CartFacadeService {
  constructor() {}

  getCartProducts(): Observable<IProduct[]> {
    // TODO: implement feature
  }

  addToCart(productId: IProduct['id']): void {
    // TODO: implement feature
  }

  removeFromCart(productId: IProduct['id']): void {
    // TODO: implement feature
  }
}
