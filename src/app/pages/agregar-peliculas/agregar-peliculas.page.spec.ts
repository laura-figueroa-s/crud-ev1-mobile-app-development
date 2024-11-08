import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPeliculasPage } from './agregar-peliculas.page';

describe('AgregarPeliculasPage', () => {
  let component: AgregarPeliculasPage;
  let fixture: ComponentFixture<AgregarPeliculasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
