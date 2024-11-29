import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardHeader, 
  IonCardContent, IonCardTitle, IonCardSubtitle, IonImg} from '@ionic/angular/standalone';
import { Router } from '@angular/router'
import { PeliculaService, Pelicula } from 'src/app/pelicula.service';
import { TakePhotoService } from '../../services/take-photo.service';

@Component({
  selector: 'app-agregar-peliculas',
  templateUrl: './agregar-peliculas.page.html',
  styleUrls: ['./agregar-peliculas.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, ReactiveFormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonImg]
})
export class AgregarPeliculasPage implements OnInit {
  peliculaForm!: FormGroup;

  photo: string | null = null;
  location: { latitud: number, longitud: number } | null = null;
  address: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private peliculaService: PeliculaService,
    private router: Router,
    private takePhotoService: TakePhotoService
  ) { }

  ngOnInit() {
    this.peliculaForm = this.formBuilder.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      director: ['', Validators.required],
      description: ['', Validators.required],
      imagenUrl: ['', Validators.required],
    });
  }

  addPelicula() {
    if (this.peliculaForm.valid) {
      const nuevaPelicula = this.peliculaForm.value;
      this.peliculaService.addPelicula(nuevaPelicula); 
      this.peliculaForm.reset();
      this.router.navigate(['/listar-peliculas']); 
    } else {
      alert('Todos los campos son obligatorios');
    }
  }

  // Method to go back to movies list
  goBack() {
      this.router.navigate(['/listar-peliculas']); // Navigate to the list of movies
    }

    async capturePhoto(){
      const result = await this.takePhotoService.takePhoto();
      console.log('Foto y ubicación', result)
      if(result){
        this.photo = result.photo;
        this.location = result.location;
        this.address = result.address;
      }
    }

    openSelector(selector: any){
      selector.open();
    }
  }