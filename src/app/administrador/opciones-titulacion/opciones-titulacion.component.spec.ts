import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesTitulacionComponent } from './opciones-titulacion.component';

describe('OpcionesTitulacionComponent', () => {
  let component: OpcionesTitulacionComponent;
  let fixture: ComponentFixture<OpcionesTitulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionesTitulacionComponent]
    });
    fixture = TestBed.createComponent(OpcionesTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
