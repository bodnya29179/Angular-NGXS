import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProduct } from '../interfaces';

@Injectable()
export class ProductService {
  private readonly products$ = new BehaviorSubject<IProduct[]>([
    { id: 'fake-id1', name: 'Samsung' },
    { id: 'fake-id2', name: 'Apple' },
    { id: 'fake-id3', name: 'LG' },
    { id: 'fake-id4', name: 'Siemens' },
  ]);

  getProducts(): Observable<IProduct[]> {
    return this.products$;
  }

  addProduct(productName: IProduct['name']): Observable<IProduct> {
    const products = [...this.products$.value];
    const lastIndex = products.length ? parseInt(products.reverse()[0].id.split('').reverse().join('')) : 0;
    const id = `fake-id${ lastIndex + 1 }`;
    const product: IProduct = { id, name: productName };

    this.products$.next([...this.products$.value, product]);

    return of(product);
  }

  editProduct(productId: string, productName: IProduct['name']): Observable<IProduct> {
    const products = this.products$.value;
    const product: IProduct = {
      ...products.find(({ id }) => id === productId),
      name: productName,
    };

    this.products$.next([
      ...products.filter(({ id }) => id !== productId),
      product,
    ]);

    return of(product);
  }

  removeProduct(productId: IProduct['id']): Observable<void> {
    const products = this.products$.value.filter(({ id }) => id !== productId);

    this.products$.next(products);

    return of(null);
  }
}
