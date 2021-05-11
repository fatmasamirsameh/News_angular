import { TestBed } from '@angular/core/testing';

import { AuthGaurdsService } from './auth-gaurds.service';

describe('AuthGaurdsService', () => {
  let service: AuthGaurdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGaurdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
