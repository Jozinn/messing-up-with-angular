import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public productFrom!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.productFrom = this.fb.group({
      name: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      imageURL: [null, [Validators.required, Validators.pattern(/(.jpg|.jpeg|.png)$/)]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    console.log(this.productFrom.value);
  }
}
