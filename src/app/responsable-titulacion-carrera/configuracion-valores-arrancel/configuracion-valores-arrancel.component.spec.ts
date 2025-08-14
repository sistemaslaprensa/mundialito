import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionValoresArrancelComponent } from './configuracion-valores-arrancel.component';

describe('ConfiguracionValoresArrancelComponent', () => {
  let component: ConfiguracionValoresArrancelComponent;
  let fixture: ComponentFixture<ConfiguracionValoresArrancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionValoresArrancelComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionValoresArrancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
