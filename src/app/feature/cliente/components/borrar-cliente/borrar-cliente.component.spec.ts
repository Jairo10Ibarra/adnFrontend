import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { BorrarClienteComponent } from './borrar-cliente.component';

describe('BorrarClienteComponent', () => {
  let component: BorrarClienteComponent;
  let fixture: ComponentFixture<BorrarClienteComponent>;
  let clienteService: ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarClienteComponent],
      imports: [HttpClientModule],
      providers: [ClienteService, HttpService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete client', () => {
    spyOn(clienteService, 'eliminar').and.returnValue(of(true));
    component.borrarCliente(1);
    expect(clienteService.eliminar).toHaveBeenCalledWith(1);
  });
});
