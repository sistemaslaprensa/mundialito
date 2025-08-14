import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerSolicitudMatriculaComponent } from './obtener-solicitud-matricula.component';

describe('ObtenerSolicitudMatriculaComponent', () => {
  let component: ObtenerSolicitudMatriculaComponent;
  let fixture: ComponentFixture<ObtenerSolicitudMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerSolicitudMatriculaComponent]
    });
    fixture = TestBed.createComponent(ObtenerSolicitudMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
