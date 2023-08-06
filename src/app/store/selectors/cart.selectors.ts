import { Injectable } from '@angular/core';
import { ProductSelectors } from './product.selectors';
import { Store } from '@ngxs/store';
import { map, Observable, of, switchMap } from 'rxjs';
import { IProduct } from '../../interfaces';
import { ICartState } from '../states';

@Injectable()
export class CartSelectors {
  constructor(
    private store: Store,
    private productSelectors: ProductSelectors,
  ) {}

  get cartProducts$(): Observable<IProduct[]> {
    return this.featureSelector$
      .pipe(
        map((state: ICartState) => state.productIds),
        switchMap((productIds: string[]) => {
          return productIds?.length ? this.productSelectors.getProductsByIds$(productIds) : of([]);
        }),
      );
  }

  private get featureSelector$(): Observable<ICartState> {
    return this.store.select<ICartState>((state) => state.cartState);
  }
}
