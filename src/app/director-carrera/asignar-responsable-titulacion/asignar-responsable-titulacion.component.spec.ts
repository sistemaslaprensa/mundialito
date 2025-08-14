import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarResponsableTitulacionComponent } from './asignar-responsable-titulacion.component';

describe('AsignarResponsableTitulacionComponent', () => {
  let component: AsignarResponsableTitulacionComponent;
  let fixture: ComponentFixture<AsignarResponsableTitulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarResponsableTitulacionComponent]
    });
    fixture = TestBed.createComponent(AsignarResponsableTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
