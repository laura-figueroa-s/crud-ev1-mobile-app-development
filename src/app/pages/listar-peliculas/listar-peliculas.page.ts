import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonCardContent, IonItem, IonLabel, IonThumbnail, IonButton } from '@ionic/angular/standalone';
import { PeliculaService, Pelicula } from 'src/app/pelicula.service'; 

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.page.html',
  styleUrls: ['./listar-peliculas.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonCardContent, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, IonCardSubtitle, CommonModule, FormsModule]
})
export class ListarPeliculasPage implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) { }

  eliminarPelicula(index:number){
    this.peliculas.splice(index,1)
  }


  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

  
}
