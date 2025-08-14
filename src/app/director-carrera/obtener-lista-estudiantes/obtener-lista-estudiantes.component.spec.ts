import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerListaEstudiantesComponent } from './obtener-lista-estudiantes.component';

describe('ObtenerListaEstudiantesComponent', () => {
  let component: ObtenerListaEstudiantesComponent;
  let fixture: ComponentFixture<ObtenerListaEstudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerListaEstudiantesComponent]
    });
    fixture = TestBed.createComponent(ObtenerListaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
