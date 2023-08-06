import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../interfaces';
import { Store } from '@ngxs/store';
import { IProductsState } from '../states';

@Injectable()
export class ProductSelectors {
  constructor(private store: Store) {}

  get products$(): Observable<IProduct[]> {
    return this.featureSelector$
      .pipe(
        map((state: IProductsState) => state.products),
      );
  }

  get isLoading$(): Observable<boolean> {
    return this.featureSelector$
      .pipe(
        map((state: IProductsState) => state.isLoading),
      );
  }

  getProductsByIds$(productIds: string[]): Observable<IProduct[]> {
    return this.featureSelector$
      .pipe(
        map((state: IProductsState) => {
          return state.products.filter(({ id }) => productIds.includes(id));
        }),
      );
  }

  private get featureSelector$(): Observable<IProductsState> {
    return this.store.select<IProductsState>((state) => state.productsState);
  }
}
