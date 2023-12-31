import { TestBed } from '@angular/core/testing';

import { UserScenarioService } from './user-scenario.service';

describe('UserScenarioService', () => {
  let service: UserScenarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserScenarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
