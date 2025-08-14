import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoMatriculaComponent } from './periodo-matricula.component';

describe('PeriodoMatriculaComponent', () => {
  let component: PeriodoMatriculaComponent;
  let fixture: ComponentFixture<PeriodoMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodoMatriculaComponent]
    });
    fixture = TestBed.createComponent(PeriodoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
