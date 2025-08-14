import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMatriculaComponent } from './tipo-matricula.component';

describe('TipoMatriculaComponent', () => {
  let component: TipoMatriculaComponent;
  let fixture: ComponentFixture<TipoMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoMatriculaComponent]
    });
    fixture = TestBed.createComponent(TipoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
