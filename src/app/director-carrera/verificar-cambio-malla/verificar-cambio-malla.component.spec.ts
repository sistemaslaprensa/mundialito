import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCambioMallaComponent } from './verificar-cambio-malla.component';

describe('VerificarCambioMallaComponent', () => {
  let component: VerificarCambioMallaComponent;
  let fixture: ComponentFixture<VerificarCambioMallaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificarCambioMallaComponent]
    });
    fixture = TestBed.createComponent(VerificarCambioMallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
