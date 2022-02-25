import { TestBed } from '@angular/core/testing';

import { OktaWidget1Service } from './okta-widget-1.service';

describe('OktaWidget1Service', () => {
  let service: OktaWidget1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaWidget1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
