import { TestBed } from '@angular/core/testing';

import { FoodListServiceService } from './food-list-service.service';

describe('FoodListServiceService', () => {
  let service: FoodListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
