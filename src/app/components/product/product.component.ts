import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IProduct } from '../../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  productName: string;
  isEditing = false;

  @Input()
  product: IProduct;

  @Output()
  edit = new EventEmitter<IProduct>();

  @Output()
  delete = new EventEmitter<IProduct['id']>();

  @Output()
  addToCart = new EventEmitter<IProduct['id']>();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.productName = this.product.name;
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    this.cd.detectChanges();
  }

  saveChanges(): void {
    this.edit.emit({ id: this.product.id, name: this.productName });
    this.toggleEditing();
  }

  deleteProduct(): void {
    this.delete.emit(this.product.id);
  }

  addProductToCart(): void {
    this.addToCart.emit(this.product.id);
  }
}
