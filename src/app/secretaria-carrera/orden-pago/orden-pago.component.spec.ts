import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPagoComponent } from './orden-pago.component';

describe('OrdenPagoComponent', () => {
  let component: OrdenPagoComponent;
  let fixture: ComponentFixture<OrdenPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenPagoComponent]
    });
    fixture = TestBed.createComponent(OrdenPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
