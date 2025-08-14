import { TestBed } from '@angular/core/testing';

import { TipoMatriculaService } from './tipo-matricula.service';

describe('TipoMatriculaService', () => {
  let service: TipoMatriculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMatriculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
