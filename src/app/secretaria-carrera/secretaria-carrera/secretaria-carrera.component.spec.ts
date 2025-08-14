import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaCarreraComponent } from './secretaria-carrera.component';

describe('SecretariaCarreraComponent', () => {
  let component: SecretariaCarreraComponent;
  let fixture: ComponentFixture<SecretariaCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretariaCarreraComponent]
    });
    fixture = TestBed.createComponent(SecretariaCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
