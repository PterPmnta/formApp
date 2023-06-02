import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'],
})
export class BasicPageComponent {
  /* public basicForm: FormGroup = new FormGroup({
    name: new FormControl('', [], []),
    price: new FormControl('', [], []),
    inStorage: new FormControl('', [], []),
  }); */

  public basicForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.min(0)]],
    inStorage: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSave() {
    if (this.basicForm.invalid) return;
    console.log(this.basicForm.value);
    this.basicForm.reset({
      name: '',
      price: 0,
      inStorage: 0,
    });
  }
}
