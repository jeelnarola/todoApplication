import { TestBed } from '@angular/core/testing';

import { EmpoyeeService } from './empoyee.service';

describe('EmpoyeeService', () => {
  let service: EmpoyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
