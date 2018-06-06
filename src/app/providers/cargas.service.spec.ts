import { TestBed, inject } from '@angular/core/testing';

import { CargasService } from './cargas.service';

describe('CargasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargasService]
    });
  });

  it('should be created', inject([CargasService], (service: CargasService) => {
    expect(service).toBeTruthy();
  }));
});
