import { TestBed } from '@angular/core/testing';

import { FieraService } from './fiera.service';

describe('FieraService', () => {
  let service: FieraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
