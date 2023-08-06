import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CartSelectors, CartAction } from '../store';

@Injectable()
export class CartFacadeService {
  constructor(
    private store: Store,
    private cartSelectors: CartSelectors,
  ) {}

  getCartProducts(): Observable<IProduct[]> {
    return this.cartSelectors.cartProducts$;
  }

  addToCart(productId: IProduct['id']): void {
    this.store.dispatch(new CartAction.AddToCart(productId));
  }

  removeFromCart(productId: IProduct['id']): void {
    this.store.dispatch(new CartAction.RemoveFromCart(productId));
  }
}
