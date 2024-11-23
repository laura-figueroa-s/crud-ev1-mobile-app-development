import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonButton, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  form!: FormGroup

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),

      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    })
  }

  /* onLogin(){
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === this.email && u.password === this.password);

    if(user){
      alert('Inicio de sesión exitoso');
      this.router.navigate(['listar-peliculas']);
    } else {
      alert('Correo o contraseña inválidos')
    }
  } */

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
