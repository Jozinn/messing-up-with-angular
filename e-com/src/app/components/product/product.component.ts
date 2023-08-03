import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { connect } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductValueChange } from 'src/app/models/product-value-change';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() public product!: Product;
  @Output() private changeValue: EventEmitter<ProductValueChange> = new EventEmitter();
  public quantities!: Array<number>;

  constructor() {}

  ngOnInit() {
    
  }

  incrementInCart() {
    this.changeValue.emit({product: this.product, changeInQuantity: 1});
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.changeValue.emit({product: this.product, changeInQuantity: -1})
    }
  }

  onQtyChange(qty: number) {
    console.log('Quantity change', qty);
  }

}
