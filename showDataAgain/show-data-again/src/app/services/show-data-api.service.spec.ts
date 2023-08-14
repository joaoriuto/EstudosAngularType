import { TestBed } from '@angular/core/testing';

import { ShowDataApiService } from './show-data-api.service';

describe('ShowDataApiService', () => {
  let service: ShowDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
