import { TestBed } from '@angular/core/testing';

import { ApiStudentsService } from './api-property.service';
import { PropertyRead } from '@angular/compiler';

describe('ApiStudentsService', () => {
  let service: ApiStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

