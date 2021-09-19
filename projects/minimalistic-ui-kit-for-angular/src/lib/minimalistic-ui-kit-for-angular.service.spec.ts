import { TestBed } from '@angular/core/testing';

import { MinimalisticUiKitForAngularService } from './minimalistic-ui-kit-for-angular.service';

describe('MinimalisticUiKitForAngularService', () => {
  let service: MinimalisticUiKitForAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimalisticUiKitForAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
