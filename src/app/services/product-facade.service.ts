import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { filter, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { ProductAction, ProductSelectors } from '../store';

@Injectable()
export class ProductFacadeService {
  constructor(
    private store: Store,
    private productSelectors: ProductSelectors,
  ) {}

  loadProducts(): void {
    this.store.dispatch(new ProductAction.LoadProducts());
  }

  getProducts(): Observable<IProduct[]> {
    return this.productSelectors.products$
      .pipe(filter(Boolean));
  }

  addProduct(productName: IProduct['name']): void {
    this.store.dispatch(new ProductAction.AddProduct(productName));
  }

  editProduct(productId: IProduct['id'], productName: IProduct['name']): void {
    this.store.dispatch(new ProductAction.EditProduct(productId, productName));
  }

  removeProduct(productId: IProduct['id']): void {
    this.store.dispatch(new ProductAction.RemoveProduct(productId));
  }
}
