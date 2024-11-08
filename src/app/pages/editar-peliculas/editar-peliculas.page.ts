import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.page.html',
  styleUrls: ['./editar-peliculas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditarPeliculasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
