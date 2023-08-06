import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { IProduct } from '../../interfaces';
import { ProductAction } from '../actions';
import { ProductService } from '../../services';
import { firstValueFrom } from 'rxjs';

export interface IProductsState {
  isLoading: boolean;
  products: IProduct[] | undefined;
}

/* Reducer + Effect */
@State<IProductsState>({
  name: 'productsState',
  defaults: {
    isLoading: false,
    products: undefined,
  },
})
@Injectable()
export class ProductsState {
  constructor(private productService: ProductService) {}

  // Way 1
  // @Action(ProductAction.LoadProducts)
  // loadProducts(context: StateContext<IProductsState>): Observable<IProduct[]> {
  //   return this.productService.getProducts()
  //     .pipe(
  //       tap((products: IProduct[]) => context.patchState({ products })),
  //     );
  // }

  // Way 2
  @Action(ProductAction.LoadProducts)
  async loadProducts(context: StateContext<IProductsState>): Promise<void> {
    const products = await firstValueFrom(this.productService.getProducts());

    context.patchState({ products });
  }

  @Action(ProductAction.AddProduct)
  async addProduct(context: StateContext<IProductsState>, action: ProductAction.AddProduct): Promise<void> {
    context.patchState({ isLoading: true });

    const product = await firstValueFrom(this.productService.addProduct(action.productName));

    context.setState((state: IProductsState) => {
      return {
        ...state,
        products: [
          ...state.products,
          product,
        ],
        isLoading: false,
      };
    });
  }

  @Action(ProductAction.EditProduct)
  async editProduct(context: StateContext<IProductsState>, action: ProductAction.EditProduct): Promise<void> {
    context.patchState({ isLoading: true });

    const product = await firstValueFrom(this.productService.editProduct(action.productId, action.productName));

    context.setState((state: IProductsState) => {
      return {
        ...state,
        products: state.products.map((prod) => prod.id === action.productId ? product : prod),
        isLoading: false,
      };
    });
  }

  @Action(ProductAction.RemoveProduct)
  async removeProduct(context: StateContext<IProductsState>, action: ProductAction.RemoveProduct): Promise<void> {
    context.patchState({ isLoading: true });

    await firstValueFrom(this.productService.removeProduct(action.productId));

    context.setState((state: IProductsState) => {
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== action.productId),
        isLoading: false,
      };
    });
  }
}
