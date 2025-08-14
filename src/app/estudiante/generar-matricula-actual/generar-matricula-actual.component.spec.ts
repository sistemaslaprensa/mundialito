import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarMatriculaActualComponent } from './generar-matricula-actual.component';

describe('GenerarMatriculaActualComponent', () => {
  let component: GenerarMatriculaActualComponent;
  let fixture: ComponentFixture<GenerarMatriculaActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarMatriculaActualComponent]
    });
    fixture = TestBed.createComponent(GenerarMatriculaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
