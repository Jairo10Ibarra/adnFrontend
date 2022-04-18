import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CompraService } from "@compra/shared/service/compra.service";

@Component({
  selector: "app-crear-compra",
  templateUrl: "./crear-compra.component.html",
  styleUrls: ["./crear-compra.component.css"],
})
export class CrearCompraComponent implements OnInit {
  compraForm: FormGroup;

  constructor(
    protected compraService: CompraService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.construirFormularioCompra();
  }

  crear() {
    const date = this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss");
    this.compraForm.value.fechaCompra = date;
    console.log(this.compraForm.value);
    this.compraService.guardar(this.compraForm.value).subscribe(res => {
        console.log(res);
    });

  }

  private construirFormularioCompra() {
    this.compraForm = new FormGroup({
      precio: new FormControl("", [Validators.required]),
      idCliente: new FormControl("", [Validators.required]),
      fechaCompra: new FormControl(""),
    });
  }
}
