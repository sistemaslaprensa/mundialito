import { TestBed } from '@angular/core/testing';

import { OpciontitulacionService } from './opciontitulacion.service';

describe('OpciontitulacionService', () => {
  let service: OpciontitulacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpciontitulacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
