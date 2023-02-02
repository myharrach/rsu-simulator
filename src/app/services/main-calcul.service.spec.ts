import { TestBed } from '@angular/core/testing';

import { MainCalculService } from './main-calcul.service';

describe('MainCalculService', () => {
  let service: MainCalculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCalculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
