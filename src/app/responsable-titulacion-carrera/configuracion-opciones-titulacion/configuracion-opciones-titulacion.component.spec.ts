import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionOpcionesTitulacionComponent } from './configuracion-opciones-titulacion.component';

describe('ConfiguracionOpcionesTitulacionComponent', () => {
  let component: ConfiguracionOpcionesTitulacionComponent;
  let fixture: ComponentFixture<ConfiguracionOpcionesTitulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionOpcionesTitulacionComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionOpcionesTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
