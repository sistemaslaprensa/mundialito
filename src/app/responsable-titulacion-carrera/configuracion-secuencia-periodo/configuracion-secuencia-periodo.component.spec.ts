import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionSecuenciaPeriodoComponent } from './configuracion-secuencia-periodo.component';

describe('ConfiguracionSecuenciaPeriodoComponent', () => {
  let component: ConfiguracionSecuenciaPeriodoComponent;
  let fixture: ComponentFixture<ConfiguracionSecuenciaPeriodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionSecuenciaPeriodoComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionSecuenciaPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
