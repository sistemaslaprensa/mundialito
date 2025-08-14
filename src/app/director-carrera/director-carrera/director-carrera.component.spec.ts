import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorCarreraComponent } from './director-carrera.component';

describe('DirectorCarreraComponent', () => {
  let component: DirectorCarreraComponent;
  let fixture: ComponentFixture<DirectorCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorCarreraComponent]
    });
    fixture = TestBed.createComponent(DirectorCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
