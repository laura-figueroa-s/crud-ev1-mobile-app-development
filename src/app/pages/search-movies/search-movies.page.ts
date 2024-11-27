import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonSearchbar } from '@ionic/angular/standalone';
import { ApiTmdbService } from 'src/app/api-tmdb.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.page.html',
  styleUrls: ['./search-movies.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonLabel, IonItem, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchMoviesPage implements OnInit {

  searchQuery: string = ''; // For storing the user's search input
  movies: any[] = []; // For storing the list of movies
  currentPage: number = 1; // Current page for pagination
  totalPages: number = 1; // Total pages returned by the API


  constructor(private apiTmdb: ApiTmdbService) { }

  ngOnInit() {
  }

  searchMovies(resetPagination: boolean = false) {
    if (resetPagination) {
      this.currentPage = 1;
      this.movies = [];
    }

    if (this.searchQuery.trim()) {
      this.apiTmdb.searchMovies(this.searchQuery, this.currentPage).subscribe(
        (response) => {
          this.movies = [...this.movies, ...response.results]; // Append results to the current list
          this.totalPages = response.total_pages; // Update total pages
          this.currentPage++; // Increment the current page
        },
        (error) => console.error('Error fetching movies:', error)
      );
    }
  }
}
