import { ComponentFixture, TestBed, async, inject } from "@angular/core/testing";
import { ProductListComponent } from "./product-list.component"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductComponent } from "../product/product.component";
import { ProductService } from "src/app/services/product-service.service";
import { HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";

describe('ProductListComponent with http service', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      providers: [ProductService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    httpBackend = backend;
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpBackend.expectOne({
      url: '/api/product',
      method: 'GET'
    }, 'Get list of products').flush([{
      id: 0,
      name: 'tst',
      imageUrl: '',
      price: 2137,
      isOnSale: true,
      quantityInCart: 0
    }, {
      id: 1,
      name: 'tsk',
      imageUrl: '',
      price: 2137,
      isOnSale: true,
      quantityInCart: 0
    }]);
  }));

  it('should load products from real service', async(() => {
    expect(component).toBeTruthy();
    expect(component.products).toBeTruthy();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const products = fixture.debugElement.queryAll(By.css('app-product'));
      expect(products.length).toEqual(2);
    });
  }));

  afterEach(() => {
    httpBackend.verify();
  });
});