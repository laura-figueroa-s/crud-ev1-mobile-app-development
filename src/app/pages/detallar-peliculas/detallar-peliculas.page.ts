import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detallar-peliculas',
  templateUrl: './detallar-peliculas.page.html',
  styleUrls: ['./detallar-peliculas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallarPeliculasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
