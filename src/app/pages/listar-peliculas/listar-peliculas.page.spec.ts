import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPeliculasPage } from './listar-peliculas.page';

describe('ListarPeliculasPage', () => {
  let component: ListarPeliculasPage;
  let fixture: ComponentFixture<ListarPeliculasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
