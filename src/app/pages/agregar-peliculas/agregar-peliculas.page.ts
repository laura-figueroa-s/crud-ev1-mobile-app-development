import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import {Router} from '@angular/router'
import { PeliculaService, Pelicula } from 'src/app/pelicula.service';

@Component({
  selector: 'app-agregar-peliculas',
  templateUrl: './agregar-peliculas.page.html',
  styleUrls: ['./agregar-peliculas.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AgregarPeliculasPage implements OnInit {
  peliculaForm!: FormGroup; // Add "!" to tell TypeScript that it will be initialized in ngOnInit

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder to build the form
    private peliculaService: PeliculaService, // Inject the service
    private router: Router // Inject router for navigation
  ) {}

  ngOnInit() {
    // Initialize the form with a single field 'name'
    this.peliculaForm = this.formBuilder.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      director: ['', Validators.required],
      description: ['', Validators.required],
      imagenUrl: ['', Validators.required],
    });
  }

  // Method to handle form submission
  addPelicula() {
    if (this.peliculaForm.valid) {
      const nuevaPelicula = this.peliculaForm.value; // Get the form value
      this.peliculaService.addPelicula(nuevaPelicula); // Call service to add the movie
      this.peliculaForm.reset(); // Reset the form after submitting
      this.router.navigate(['/listar-peliculas']); // Optionally, navigate to the list of movies
    } else {
      alert('Todos los campos son obligatorios'); // Alert if the form is invalid
    }
  }
}
