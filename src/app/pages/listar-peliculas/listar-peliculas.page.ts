import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonCardContent, IonButton, IonButtons, IonItem, IonLabel, IonSearchbar, IonIcon, IonFabButton } from '@ionic/angular/standalone';
import { PeliculaService, Pelicula } from 'src/app/pelicula.service'; 
import { Router } from '@angular/router';
import { ApiTmdbService } from 'src/app/api-tmdb.service';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.page.html',
  styleUrls: ['./listar-peliculas.page.scss'],
  standalone: true,
  imports: [IonIcon,IonFabButton, IonSearchbar, IonLabel, IonItem, IonButtons, IonButton, IonCardContent, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, CommonModule, ReactiveFormsModule]
})
export class ListarPeliculasPage implements OnInit {

  searchForm!: FormGroup;
  movies: any[] = [];
  /* searchQuery: string = ''; */

  peliculas: Pelicula[] = [];

  constructor(
    private peliculaService: PeliculaService, 
    private router: Router, 
    private apiTmdbService: ApiTmdbService) { 
      addIcons({ addCircleOutline });
    }

  ngOnInit() {
    this.searchForm = new FormGroup({
      query: new FormControl(''),
    });

    this.peliculaService.peliculas$.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
  }

  eliminarPelicula(index:number){
    this.peliculas.splice(index,1)
  }

  goToAddMovie() {
    this.router.navigate(['/agregar-peliculas']);
  }

  deletePelicula(index: number) {
    this.peliculaService.deletePelicula(index); 
  }

  /* searchMovies(){
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
  } */

  searchMovies(){
    const query = this.searchForm.get('query')?.value.trim();
    if(query){
      this.apiTmdbService.searchMovies(query).subscribe(
        (response) => {
          this.movies = response.results;
        },
        (error) => {
          console.error('Error al buscar película:', error);
        }
      )
    }
  }

  getImageUrl(posterPath: string | null): string{
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : 'assets/images/no-image.png'; // Fallback image
  }

  getYear(releaseDate: string | null): number {
    return releaseDate ? parseInt(releaseDate.split('-')[0], 10) : 0;
  }

  addMovie(movie: any){
    const pelicula: Pelicula = {
      name: movie.title,
      year: this.getYear(movie.release_date),
      description: movie.overview,
      director: 'Unknown',
      imagenUrl: this.getImageUrl(movie.poster_path),
    };
    this.peliculaService.addPelicula(pelicula);
    this.router.navigate(['/listar-peliculas']);
    console.log(`${pelicula.name} added to your list.`);
    };
      
  onSearchInput(event: Event): void {
    const input = event.target as HTMLIonSearchbarElement;
    this.searchForm.get('query')?.setValue(input.value);
  }

  onSearchClear() {
    this.movies = [];
    this.searchForm.get('query')?.setValue('');
  }

}
