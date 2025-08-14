import { TestBed } from '@angular/core/testing';

import { ResponsabletitulacionServiceService } from './responsabletitulacion.service.service';

describe('ResponsabletitulacionServiceService', () => {
  let service: ResponsabletitulacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsabletitulacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
