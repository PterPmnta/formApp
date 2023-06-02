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

  isValidField(field: string): boolean | null | undefined {
    return (
      this.basicForm.get(field)?.errors && this.basicForm.get(field)?.touched
    );
  }

  getFieldError(field: string): string | null | undefined {
    if (!this.basicForm.controls[field]) return null;

    const errors = this.basicForm.controls[field].errors || {};
    if (!errors) return null;

    const errorKeys = Object.keys(errors);

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `${field} es requerido`;
        case 'minlength':
          return `${field} debe al menos tener ${errors[key].requiredLength} caracteres`;
        case 'min':
          return `${field} el valor minimo debe ser igual o mayor a ${errors[key].min}!`;
        default:
          return null;
      }
    }

    if (!errorKeys.length) return null;

    return errors[errorKeys[0]];
  }

  onSave() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }
    console.log(this.basicForm.value);
    this.basicForm.reset({
      name: '',
      price: 0,
      inStorage: 0,
    });
  }
}
