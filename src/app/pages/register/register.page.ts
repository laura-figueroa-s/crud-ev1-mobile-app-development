import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonText, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCol, IonRow, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonButton, IonContent, CommonModule, FormsModule, IonInputPasswordToggle]
})
export class RegisterPage implements OnInit {

  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
