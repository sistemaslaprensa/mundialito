import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerSolicitudesRevisionMallaComponent } from './obtener-solicitudes-revision-malla.component';

describe('ObtenerSolicitudesRevisionMallaComponent', () => {
  let component: ObtenerSolicitudesRevisionMallaComponent;
  let fixture: ComponentFixture<ObtenerSolicitudesRevisionMallaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerSolicitudesRevisionMallaComponent]
    });
    fixture = TestBed.createComponent(ObtenerSolicitudesRevisionMallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
