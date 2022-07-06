import { TestBed } from '@angular/core/testing';

import { CustomSerializerService } from './custom-serializer.service';

describe('CustomSerializerService', () => {
  let service: CustomSerializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSerializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
