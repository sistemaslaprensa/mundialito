import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionMatriculaEstudianteComponent } from './aprobacion-matricula-estudiante.component';

describe('AprobacionMatriculaEstudianteComponent', () => {
  let component: AprobacionMatriculaEstudianteComponent;
  let fixture: ComponentFixture<AprobacionMatriculaEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobacionMatriculaEstudianteComponent]
    });
    fixture = TestBed.createComponent(AprobacionMatriculaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
