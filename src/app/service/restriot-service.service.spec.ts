import { TestBed } from '@angular/core/testing';

import { RESTRiotServiceService } from './restriot-service.service';

describe('RESTRiotServiceService', () => {
  let service: RESTRiotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTRiotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
