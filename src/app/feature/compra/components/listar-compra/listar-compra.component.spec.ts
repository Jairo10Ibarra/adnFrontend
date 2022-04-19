import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CompraService } from "@compra/shared/service/compra.service";
import { HttpService } from "@core/services/http.service";

import { ListarCompraComponent } from "./listar-compra.component";

describe("ListarCompraComponent", () => {
  let component: ListarCompraComponent;
  let fixture: ComponentFixture<ListarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCompraComponent],
      imports: [HttpClientModule],
      providers: [CompraService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
