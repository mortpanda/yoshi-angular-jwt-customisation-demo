import { TestBed } from '@angular/core/testing';

import { OktaWidget2Service } from './okta-widget-2.service';

describe('OktaWidget2Service', () => {
  let service: OktaWidget2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaWidget2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
