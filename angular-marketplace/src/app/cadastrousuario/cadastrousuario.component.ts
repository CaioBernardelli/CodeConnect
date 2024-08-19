import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Certifique-se de importar isso


@Component({
  selector: 'app-cadastrousuario',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrl: './cadastrousuario.component.scss'
})
export class CadastrousuarioComponent {
errorMessage() {
throw new Error('Method not implemented.');
}
email: FormControl<any> | undefined;
updateErrorMessage() {
throw new Error('Method not implemented.');
}
  signUpForm: FormGroup;
hide: any;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }

}
