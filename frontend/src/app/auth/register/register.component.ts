import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',"../../../assets/css/style.min.css",
"../../../assets/css/icons.css"]
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
    
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      nom:['', [Validators.required]],
      prenom :['', [Validators.required]],
      telephone :['', [Validators.required]],
      role:['admin', [Validators.required]],
    }, { validator: this.passwordMathValidator })
  }

  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm() {
    console.log(this.registerForm!.value);
    this.service.register(this.registerForm!.value).subscribe(
      (response) => {
        if (response.id != null) {
          alert("Hello " + response.username);
        }
      }
    )
  }
}
