import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClienteService } from "@cliente/shared/service/cliente.service";
import { HttpService } from "@core/services/http.service";

import { ListarClienteComponent } from "./listar-cliente.component";

describe("ListarClienteComponent", () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarClienteComponent],
      imports: [HttpClientModule],
      providers: [ClienteService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
