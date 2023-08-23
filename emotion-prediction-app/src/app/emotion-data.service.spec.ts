import { TestBed } from '@angular/core/testing';

import { EmotionDataService } from './emotion-data.service';

describe('EmotionDataService', () => {
  let service: EmotionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmotionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
