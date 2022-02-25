import { TestBed } from '@angular/core/testing';

import { OktaAuth2Service } from './okta-auth-2.service';

describe('OktaAuth2Service', () => {
  let service: OktaAuth2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaAuth2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
