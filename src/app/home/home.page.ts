import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonButtons, IonCard, 
  IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, 
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow]
})
export class HomePage {
  constructor(private router: Router,private http:HttpClient) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
