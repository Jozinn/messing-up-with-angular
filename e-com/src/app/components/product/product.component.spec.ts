import { TestBed, async } from "@angular/core/testing";
import { ProductComponent } from "./product.component";
import { By } from "@angular/platform-browser";
import { Product } from "src/app/models/product";

describe('Product component', () => {
    let fixture: any, component: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProductComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        component.product = {
            id: 0,
            name: 'tst',
            imageUrl: '',
            price: 2137,
            isOnSale: true,
            quantityInCart: 0
        };
        fixture.detectChanges();
    });

    it('should detect product component and render product data', () => {
        const quantityInCartEl = fixture.debugElement.query(By.css('span'));
        expect(quantityInCartEl.nativeElement.textContent).toEqual('0');
    });

    it('should increment quantity in cart', () => {
        expect(component.product.quantityInCart).toEqual(0);
        const incrementButton = fixture.debugElement.query(By.css('.increment'));
        incrementButton.triggerEventHandler('click');
        expect(component.product.quantityInCart).toEqual(1);
    });

    it('should decrement quantity in cart', () => {
        expect(component.product.quantityInCart).toEqual(1);
        const decrementButton = fixture.debugElement.query(By.css('.decrement'));
        decrementButton.triggerEventHandler('click');
        expect(component.product.quantityInCart).toEqual(0);
    });
});