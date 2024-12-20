import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

export interface Pelicula {
  name: String;
  year: Number;
  director: String;
  description: String;
  imagenUrl: String;
}

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
 private peliculasSubject = new BehaviorSubject<Pelicula[]>([
  {
    name: 'Atonement',
    year: 2007,
    director: 'Joe Wright',
    description:
      'La escritora Briony Tallis acusa al novio de su hermana mayor de un crimen que no cometió.',
    imagenUrl:
      'https://www.originalposter.co.uk/uploads/993541896343231_mainphotos.jpg',
  },
  {
    name: 'Immaculate',
    year: 2024,
    director: 'Michael Mohan',
    description:
      'Una monja norteamericana se une a un convento en la Italia rural, pero su estadía pronto se convierte en pesadilla cuando descubre los horribles secretos que ahí habitan.',
    imagenUrl: 'https://i.ytimg.com/vi/ewxS9Z-XXYo/maxresdefault.jpg',
  },
 ]);


 peliculas$ = this.peliculasSubject.asObservable();

 constructor(private storage: Storage) {
  this.init();
 }

 private async init() {
  const storage = await this.storage.create();
    this.storage = storage;
  // Load stored movies when service is initialized
  const peliculas = await this.storage.get('peliculas');
  if (peliculas) {
    this.peliculasSubject.next(peliculas);
  }
}

 async addPelicula(pelicula: Pelicula) {
  const peliculas = this.peliculasSubject.value;
  peliculas.push(pelicula);
  this.peliculasSubject.next(peliculas);
  
  // Save to local storage
  await this.storage.set('peliculas', peliculas);
}

 async deletePelicula(index: number) {
   const peliculas = this.peliculasSubject.value;
   peliculas.splice(index, 1);
   this.peliculasSubject.next([...peliculas]);

   await this.storage.set('peliculas', peliculas);
 }

 addFromTmdb(movie: any){
  const pelicula: Pelicula = {
    name: movie.title,
      year: new Date(movie.release_date).getFullYear(),
      director: 'Unknown',
      description: movie.overview,
      imagenUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };

    this.addPelicula(pelicula);
  }
}
