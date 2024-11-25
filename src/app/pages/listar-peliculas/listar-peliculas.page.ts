import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonCardContent, IonButton, IonButtons, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PeliculaService, Pelicula } from 'src/app/pelicula.service'; 
import { Router } from '@angular/router';
import { ApiTmdbService } from 'src/app/api-tmdb.service';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.page.html',
  styleUrls: ['./listar-peliculas.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonButtons, IonButton, IonCardContent, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, CommonModule, FormsModule]
})
export class ListarPeliculasPage implements OnInit {

  movies: any[] = [];
  searchQuery: string = '';

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService, private router: Router, private apiTmdbService: ApiTmdbService) { }

  eliminarPelicula(index:number){
    this.peliculas.splice(index,1)
  }

  ngOnInit() {
    this.peliculaService.peliculas$.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
  }

  goToAddMovie() {
    this.router.navigate(['/agregar-peliculas']);
  }

  deletePelicula(index: number) {
    this.peliculaService.deletePelicula(index); 
  }

  searchMovies(){
    if(this.searchQuery.trim()){
      this.apiTmdbService.searchMovies(this.searchQuery).subscribe(
        (response) => {
          this.movies = response.results;
        },
        (error) => {
          console.error('Error al buscar las películas:', error)
        }
      );
    }
  }
  
}
