import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButton, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonInput, IonText, IonInputPasswordToggle, IonToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonToggle, IonText, IonInput, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCol, IonRow, ReactiveFormsModule, IonButton, IonContent, IonHeader, CommonModule, FormsModule, IonInputPasswordToggle]
})
export class LoginPage implements OnInit {

  form!: FormGroup

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),

      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    })
  }


  goToRegister() {
    this.router.navigate(['/register']);
  }

  async validateForm(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return
    }
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log("Email", email)
    console.log("password", password)
    const isValid = await this.storageService.loginUser(email, password);
    if(isValid){
      this.router.navigate(['listar-peliculas'])
    } else {
      console.error('Usuario no existe');
    }
  }

}
