import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { CompraService } from './compra.service';

describe('CompraService', () => {
  let service: CompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
        providers:[CompraService, HttpService]

    });
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
