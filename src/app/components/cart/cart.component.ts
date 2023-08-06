import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces';
import { CartFacadeService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(private cartFacade: CartFacadeService) {}

  ngOnInit(): void {
    this.products$ = this.cartFacade.getCartProducts();
  }

  removeFromCart(productId: IProduct['id']): void {
    this.cartFacade.removeFromCart(productId);
  }
}
