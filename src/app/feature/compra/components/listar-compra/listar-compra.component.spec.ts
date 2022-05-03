import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompraService } from '@compra/shared/service/compra.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CrearCompraComponent } from '../crear-compra/crear-compra.component';
import { ListarCompraComponent } from './listar-compra.component';


describe('ListarCompraComponent', () => {
  let component: ListarCompraComponent;
  let fixture: ComponentFixture<ListarCompraComponent>;
  let fixtures: ComponentFixture<CrearCompraComponent>;
  let compraService: CompraService;

  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      declarations: [ListarCompraComponent],
      imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule,
        RouterTestingModule],
      providers: [CompraService, HttpService, DatePipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCompraComponent);
    fixtures = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    spyOn(compraService, 'guardar').and.returnValue(of(true));
    fixture.detectChanges();
    fixtures.detectChanges();

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
