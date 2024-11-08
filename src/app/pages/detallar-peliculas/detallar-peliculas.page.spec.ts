import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallarPeliculasPage } from './detallar-peliculas.page';

describe('DetallarPeliculasPage', () => {
  let component: DetallarPeliculasPage;
  let fixture: ComponentFixture<DetallarPeliculasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallarPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
