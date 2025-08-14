import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanoFacultadComponent } from './decano-facultad.component';

describe('DecanoFacultadComponent', () => {
  let component: DecanoFacultadComponent;
  let fixture: ComponentFixture<DecanoFacultadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecanoFacultadComponent]
    });
    fixture = TestBed.createComponent(DecanoFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
