import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import {Router} from '@angular/router'
import { PeliculaService, Pelicula } from 'src/app/pelicula.service';

@Component({
  selector: 'app-agregar-peliculas',
  templateUrl: './agregar-peliculas.page.html',
  styleUrls: ['./agregar-peliculas.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AgregarPeliculasPage implements OnInit {

  nuevaPelicula: Pelicula = {name: '', year: 0, director: '', description:'', imagenUrl: ''};

/*Angular permite incluir más de un servicio o dependencia en el constructor. Intenté con un constructor aparte, pero no funcionó*/
  constructor(private router:Router, private peliculaService: PeliculaService) { }

  ngOnInit() {
  }

  goToList(){
    this.router.navigate(['/listar-peliculas'])
  }
  
  addPelicula(){
    if(this.nuevaPelicula.name && this.nuevaPelicula.year && this.nuevaPelicula.director && this.nuevaPelicula.description && this.nuevaPelicula.imagenUrl){
      this.peliculaService.addPelicula(this.nuevaPelicula);

      this.nuevaPelicula = {name: '', year: 0, director: '', description:'', imagenUrl: ''};
    } else {
      alert('Todos los campos son obligatorios')
    }
  }
}
