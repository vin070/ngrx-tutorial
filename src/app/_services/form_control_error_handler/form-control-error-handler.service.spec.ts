import { TestBed } from '@angular/core/testing';

import { FormControlErrorHandlerService } from './form-control-error-handler.service';

describe('FormControlErrorHandlerService', () => {
  let service: FormControlErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
