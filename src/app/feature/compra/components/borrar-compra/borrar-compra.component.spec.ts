import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraService } from '@compra/shared/service/compra.service';
import { HttpService } from '@core/services/http.service';
import { BorrarCompraComponent } from './borrar-compra.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('BorrarCompraComponent', () => {
  let component: BorrarCompraComponent;
  let fixture: ComponentFixture<BorrarCompraComponent>;
  let compraService: CompraService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarCompraComponent],
      imports: [HttpClientModule],
      providers: [CompraService, HttpService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete compra', () => {
    spyOn(compraService, 'eliminar').and.returnValue(of(true));
    component.borrarCompra(1);
    expect(compraService.eliminar).toHaveBeenCalledWith(1);
  });


});
