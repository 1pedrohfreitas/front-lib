import { TestBed } from '@angular/core/testing';

import { PedrohfreitasFrontLibService } from './pedrohfreitas-front-lib.service';

describe('PedrohfreitasFrontLibService', () => {
  let service: PedrohfreitasFrontLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedrohfreitasFrontLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
