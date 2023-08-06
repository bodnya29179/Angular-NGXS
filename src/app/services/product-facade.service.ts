import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ProductFacadeService {
  constructor() {}

  loadProducts(): void {
    // TODO: implement feature
  }

  getProducts(): Observable<IProduct[]> {
    // TODO: implement feature
  }

  addProduct(productName: IProduct['name']): void {
    // TODO: implement feature
  }

  editProduct(productId: IProduct['id'], productName: IProduct['name']): void {
    // TODO: implement feature
  }

  removeProduct(productId: IProduct['id']): void {
    // TODO: implement feature
  }
}
