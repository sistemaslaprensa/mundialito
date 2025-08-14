import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerEstudiantesAprobadosComponent } from './obtener-estudiantes-aprobados.component';

describe('ObtenerEstudiantesAprobadosComponent', () => {
  let component: ObtenerEstudiantesAprobadosComponent;
  let fixture: ComponentFixture<ObtenerEstudiantesAprobadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerEstudiantesAprobadosComponent]
    });
    fixture = TestBed.createComponent(ObtenerEstudiantesAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
