import { TestBed } from '@angular/core/testing';

import { Roche7Service } from './roche7.service';

describe('Roche7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Roche7Service = TestBed.get(Roche7Service);
    expect(service).toBeTruthy();
  });
});
