import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesTitulacionComponent } from './configuraciones-titulacion.component';

describe('ConfiguracionesTitulacionComponent', () => {
  let component: ConfiguracionesTitulacionComponent;
  let fixture: ComponentFixture<ConfiguracionesTitulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionesTitulacionComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionesTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
