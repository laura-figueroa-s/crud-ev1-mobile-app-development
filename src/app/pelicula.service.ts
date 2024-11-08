import { Injectable } from '@angular/core';

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
  private peliculas: Pelicula[] = [
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
    {
      name: 'V for Vendetta',
      year: 2005,
      director: 'James McTeigue',
      description:
        'Un activista conocido como V pelea contra el sistema totalitario mediante tácticas terroristas.',
      imagenUrl:
        'https://m.media-amazon.com/images/S/pv-target-images/a01a95f5ccf69d4946bc47259a10f7fa9b5368963870bfe37c3c2f314e50ee2d.jpg',
    },
  ];

  getPeliculas(): Pelicula[]{
    return this.peliculas;
  }

  addPelicula(pelicula: Pelicula){
    this.peliculas.push(pelicula);
  }

  constructor() {}
}
