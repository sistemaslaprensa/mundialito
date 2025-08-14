import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarSituacionActualComponent } from './generar-situacion-actual.component';

describe('GenerarSituacionActualComponent', () => {
  let component: GenerarSituacionActualComponent;
  let fixture: ComponentFixture<GenerarSituacionActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarSituacionActualComponent]
    });
    fixture = TestBed.createComponent(GenerarSituacionActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
