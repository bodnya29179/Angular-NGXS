import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { CartAction } from '../actions';

export interface ICartState {
  productIds: string[];
}

/* Reducer + Effect */
@State<ICartState>({
  name: 'cartState',
  defaults: {
    productIds: [],
  }
})
@Injectable()
export class CartState {
  @Action(CartAction.AddToCart)
  addToCart(context: StateContext<ICartState>, action: CartAction.AddToCart): void {
    context.setState((state: ICartState) => ({
      productIds: state.productIds.includes(action.productId)
        ? state.productIds
        : [...state.productIds, action.productId],
    }));
  }

  @Action(CartAction.RemoveFromCart)
  removeFromCart(context: StateContext<ICartState>, action: CartAction.RemoveFromCart): void {
    context.setState((state: ICartState) => ({
      productIds: state.productIds.filter((id: string) => id !== action.productId),
    }));
  }
}
