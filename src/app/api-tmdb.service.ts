import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '1103e10ea6489dd89d30c4be8318ef8b'

  constructor(private http: HttpClient) { }

  searchMovies (query: string, page: number = 1): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', query)
      .set('page', page);

    return this.http.get(`${this.apiUrl}/search/movie`, { params });
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
