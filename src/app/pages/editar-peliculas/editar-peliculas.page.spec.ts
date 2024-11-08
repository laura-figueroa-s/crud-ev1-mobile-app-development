import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPeliculasPage } from './editar-peliculas.page';

describe('EditarPeliculasPage', () => {
  let component: EditarPeliculasPage;
  let fixture: ComponentFixture<EditarPeliculasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
