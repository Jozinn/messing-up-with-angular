import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductValueChange } from 'src/app/models/product-value-change';
import { ProductService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  public products!: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts('').subscribe(products => {
      this.products = products;
    });
  }

  onChangeValue(change: any) {
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });
    product!.quantityInCart += change.changeInQuantity;
  }

}
//templateUrl: './product-list.component.html',