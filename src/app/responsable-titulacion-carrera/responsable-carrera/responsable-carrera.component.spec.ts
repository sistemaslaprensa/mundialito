import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableCarreraComponent } from './responsable-carrera.component';

describe('ResponsableCarreraComponent', () => {
  let component: ResponsableCarreraComponent;
  let fixture: ComponentFixture<ResponsableCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableCarreraComponent]
    });
    fixture = TestBed.createComponent(ResponsableCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
