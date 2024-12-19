import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { IonContent,IonButton, IonText, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCol, IonRow, IonInputPasswordToggle, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonInput,  IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonButton, CommonModule, FormsModule, IonInputPasswordToggle, IonContent, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {

  private email: string = '';
  private password: string = '';
  private firstName: string = '';
  private lastName: string = '';

  registerForm!: FormGroup;

  constructor(private router: Router, private storageService: StorageService) { }
  

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

  async registerUser() {
    this.validateForm();
    const password = this.registerForm.get('password')?.value;
    const repeatPassword = this.registerForm.get('repeatPassword')?.value;
    const email = this.registerForm.get('email')?.value;
    const firstName = this.registerForm.get('firstName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;

    if (password !== repeatPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    await this.storageService.registerUser(this.email, this.password, this.firstName, this.lastName);
    this.router.navigate(['/login']);
  }

  validateForm(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return
    }
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    console.log("Email", email)
    console.log("password", password)
    this.router.navigate(['listar-peliculas'])
  }
}
