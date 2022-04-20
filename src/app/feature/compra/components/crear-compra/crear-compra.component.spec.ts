import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { CompraService } from "@compra/shared/service/compra.service";
import { HttpService } from "@core/services/http.service";
import { of } from "rxjs";
import { CrearCompraComponent } from "./crear-compra.component";

describe("CrearCompraComponent", () => {
  let component: CrearCompraComponent;
  let fixture: ComponentFixture<CrearCompraComponent>;
  let compraService: CompraService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCompraComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [CompraService, HttpService, DatePipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    spyOn(compraService, "guardar").and.returnValue(of(true));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('Registrando compra', () => {
    expect(component.compraForm.valid).toBeFalsy();
    component.compraForm.controls.precio.setValue('200000');
    component.compraForm.controls.idCliente.setValue('1');
    expect(component.compraForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });


});
