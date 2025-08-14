import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposCampeonatoComponent } from './tipos-campeonato.component';

describe('TiposCampeonatoComponent', () => {
  let component: TiposCampeonatoComponent;
  let fixture: ComponentFixture<TiposCampeonatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposCampeonatoComponent]
    });
    fixture = TestBed.createComponent(TiposCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
