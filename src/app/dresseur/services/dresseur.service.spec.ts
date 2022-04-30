import { TestBed } from '@angular/core/testing';

import { dresseurService } from './dresseur.service';

describe('dresseurService', () => {
  let service: dresseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dresseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
