import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { CompraService } from './compra.service';

describe('CompraService', () => {
  let service: CompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
        providers:[CompraService, HttpService],
        schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

    });
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
