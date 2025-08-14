import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarOpcionTitulacionComponent } from './seleccionar-opcion-titulacion.component';

describe('SeleccionarOpcionTitulacionComponent', () => {
  let component: SeleccionarOpcionTitulacionComponent;
  let fixture: ComponentFixture<SeleccionarOpcionTitulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionarOpcionTitulacionComponent]
    });
    fixture = TestBed.createComponent(SeleccionarOpcionTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
